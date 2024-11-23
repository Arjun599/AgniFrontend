import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as cdk from 'aws-cdk-lib';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as iam from 'aws-cdk-lib/aws-iam';
import path = require('path');

export class AmplifyChatuiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // -------------------------------------------------------------------------
    // Load SSM parameter that stores the Lambda function name

    const cognito_user_pool_id_parameter = ssm.StringParameter.valueForStringParameter(
      this, "/AgenticLLMAssistantWorkshop/cognito_user_pool_id"
    );

    const cognito_user_pool_client_id_parameter = ssm.StringParameter.valueForStringParameter(
      this, "/AgenticLLMAssistantWorkshop/cognito_user_pool_client_id"
    );

    // SSM parameter holding Rest API URL
    const agent_api_parameter = ssm.StringParameter.valueForStringParameter(
      this, "/AgenticLLMAssistantWorkshop/agent_api"
    );


    // from https://docs.aws.amazon.com/cdk/api/v2/docs/aws-amplify-alpha-readme.html
    const amplifyChatUI = new amplify.App(this, 'AmplifyChatUI', {
      autoBranchDeletion: true,
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'Arjun599', // Replace with your GitHub username
        repository: 'AgniFrontend', // Replace with your GitHub repository name
        oauthToken: cdk.SecretValue.secretsManager('GitHubOAuthTokenMain'), // Store your GitHub OAuth token in Secrets Manager
      }),
      // enable server side rendering
      platform: amplify.Platform.WEB_COMPUTE,
      // https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html#amplify-console-environment-variables
      environmentVariables: {
        // the following custom image is used to support Next.js 14, see links for details:
        // 1. https://aws.amazon.com/blogs/mobile/6-new-aws-amplify-launches-to-make-frontend-development-easier/
        // 2. https://github.com/aws-cloudformation/cloudformation-coverage-roadmap/issues/1299
        '_CUSTOM_IMAGE': 'amplify:al2023',
        'AMPLIFY_USERPOOL_ID': cognito_user_pool_id_parameter,
        'COGNITO_USERPOOL_CLIENT_ID': cognito_user_pool_client_id_parameter,
        'API_ENDPOINT': agent_api_parameter
      },
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'npm install'
              ]
            },
            build: {
              commands: [
                'npm run build'
              ]
            }
          },
          artifacts: {
            baseDirectory: '.next', // Adjust this if your build output is in a different directory
            files: '**/*'
          }
        }
      })
    });

    amplifyChatUI.addBranch('main', {stage: "PRODUCTION"});

    // -----------------------------------------------------------------------
    // stack outputs

    new cdk.CfnOutput(this, "AmplifyAppURL", {
      value: amplifyChatUI.defaultDomain,
    });

  }
}
