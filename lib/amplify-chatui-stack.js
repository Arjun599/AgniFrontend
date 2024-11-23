"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmplifyChatuiStack = void 0;
const amplify = require("@aws-cdk/aws-amplify-alpha");
const cdk = require("aws-cdk-lib");
const ssm = require("aws-cdk-lib/aws-ssm");
class AmplifyChatuiStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // -------------------------------------------------------------------------
        // Load SSM parameter that stores the Lambda function name
        const cognito_user_pool_id_parameter = ssm.StringParameter.valueForStringParameter(this, "/AgenticLLMAssistantWorkshop/cognito_user_pool_id");
        const cognito_user_pool_client_id_parameter = ssm.StringParameter.valueForStringParameter(this, "/AgenticLLMAssistantWorkshop/cognito_user_pool_client_id");
        // SSM parameter holding Rest API URL
        const agent_api_parameter = ssm.StringParameter.valueForStringParameter(this, "/AgenticLLMAssistantWorkshop/agent_api");
        // from https://docs.aws.amazon.com/cdk/api/v2/docs/aws-amplify-alpha-readme.html
        const amplifyChatUI = new amplify.App(this, 'AmplifyChatUI', {
            autoBranchDeletion: true,
            sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
                owner: 'Arjun599', // Replace with your GitHub username
                repository: 'Agni/frontend', // Replace with your GitHub repository name
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
            }
        });
        amplifyChatUI.addBranch('main', { stage: "PRODUCTION" });
        // -----------------------------------------------------------------------
        // stack outputs
        new cdk.CfnOutput(this, "AmplifyAppURL", {
            value: amplifyChatUI.defaultDomain,
        });
    }
}
exports.AmplifyChatuiStack = AmplifyChatuiStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1jaGF0dWktc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbXBsaWZ5LWNoYXR1aS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBc0Q7QUFDdEQsbUNBQW1DO0FBRW5DLDJDQUEyQztBQU8zQyxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQy9DLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsNEVBQTRFO1FBQzVFLDBEQUEwRDtRQUUxRCxNQUFNLDhCQUE4QixHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsdUJBQXVCLENBQ2hGLElBQUksRUFBRSxtREFBbUQsQ0FDMUQsQ0FBQztRQUVGLE1BQU0scUNBQXFDLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FDdkYsSUFBSSxFQUFFLDBEQUEwRCxDQUNqRSxDQUFDO1FBRUYscUNBQXFDO1FBQ3JDLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FDckUsSUFBSSxFQUFFLHdDQUF3QyxDQUMvQyxDQUFDO1FBR0YsaUZBQWlGO1FBQ2pGLE1BQU0sYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQzNELGtCQUFrQixFQUFFLElBQUk7WUFDeEIsa0JBQWtCLEVBQUUsSUFBSSxPQUFPLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3ZELEtBQUssRUFBRSxVQUFVLEVBQUUsb0NBQW9DO2dCQUN2RCxVQUFVLEVBQUUsY0FBYyxFQUFFLDJDQUEyQztnQkFDdkUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsbURBQW1EO2FBQ3hILENBQUM7WUFDRiwrQkFBK0I7WUFDL0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVztZQUN0Qyx3SEFBd0g7WUFDeEgsb0JBQW9CLEVBQUU7Z0JBQ3BCLG1GQUFtRjtnQkFDbkYseUdBQXlHO2dCQUN6Ryx1RkFBdUY7Z0JBQ3ZGLGVBQWUsRUFBRSxnQkFBZ0I7Z0JBQ2pDLHFCQUFxQixFQUFFLDhCQUE4QjtnQkFDckQsNEJBQTRCLEVBQUUscUNBQXFDO2dCQUNuRSxjQUFjLEVBQUUsbUJBQW1CO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztRQUV2RCwwRUFBMEU7UUFDMUUsZ0JBQWdCO1FBRWhCLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFO1lBQ3ZDLEtBQUssRUFBRSxhQUFhLENBQUMsYUFBYTtTQUNuQyxDQUFDLENBQUM7SUFFTCxDQUFDO0NBQ0Y7QUFyREQsZ0RBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYW1wbGlmeSBmcm9tICdAYXdzLWNkay9hd3MtYW1wbGlmeS1hbHBoYSc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBzc20gZnJvbSAnYXdzLWNkay1saWIvYXdzLXNzbSc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheVwiO1xuaW1wb3J0ICogYXMgY29nbml0byBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY29nbml0byc7XG5pbXBvcnQgKiBhcyBpYW0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWlhbSc7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuZXhwb3J0IGNsYXNzIEFtcGxpZnlDaGF0dWlTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBMb2FkIFNTTSBwYXJhbWV0ZXIgdGhhdCBzdG9yZXMgdGhlIExhbWJkYSBmdW5jdGlvbiBuYW1lXG5cbiAgICBjb25zdCBjb2duaXRvX3VzZXJfcG9vbF9pZF9wYXJhbWV0ZXIgPSBzc20uU3RyaW5nUGFyYW1ldGVyLnZhbHVlRm9yU3RyaW5nUGFyYW1ldGVyKFxuICAgICAgdGhpcywgXCIvQWdlbnRpY0xMTUFzc2lzdGFudFdvcmtzaG9wL2NvZ25pdG9fdXNlcl9wb29sX2lkXCJcbiAgICApO1xuXG4gICAgY29uc3QgY29nbml0b191c2VyX3Bvb2xfY2xpZW50X2lkX3BhcmFtZXRlciA9IHNzbS5TdHJpbmdQYXJhbWV0ZXIudmFsdWVGb3JTdHJpbmdQYXJhbWV0ZXIoXG4gICAgICB0aGlzLCBcIi9BZ2VudGljTExNQXNzaXN0YW50V29ya3Nob3AvY29nbml0b191c2VyX3Bvb2xfY2xpZW50X2lkXCJcbiAgICApO1xuXG4gICAgLy8gU1NNIHBhcmFtZXRlciBob2xkaW5nIFJlc3QgQVBJIFVSTFxuICAgIGNvbnN0IGFnZW50X2FwaV9wYXJhbWV0ZXIgPSBzc20uU3RyaW5nUGFyYW1ldGVyLnZhbHVlRm9yU3RyaW5nUGFyYW1ldGVyKFxuICAgICAgdGhpcywgXCIvQWdlbnRpY0xMTUFzc2lzdGFudFdvcmtzaG9wL2FnZW50X2FwaVwiXG4gICAgKTtcblxuXG4gICAgLy8gZnJvbSBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vY2RrL2FwaS92Mi9kb2NzL2F3cy1hbXBsaWZ5LWFscGhhLXJlYWRtZS5odG1sXG4gICAgY29uc3QgYW1wbGlmeUNoYXRVSSA9IG5ldyBhbXBsaWZ5LkFwcCh0aGlzLCAnQW1wbGlmeUNoYXRVSScsIHtcbiAgICAgIGF1dG9CcmFuY2hEZWxldGlvbjogdHJ1ZSxcbiAgICAgIHNvdXJjZUNvZGVQcm92aWRlcjogbmV3IGFtcGxpZnkuR2l0SHViU291cmNlQ29kZVByb3ZpZGVyKHtcbiAgICAgICAgb3duZXI6ICdBcmp1bjU5OScsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEdpdEh1YiB1c2VybmFtZVxuICAgICAgICByZXBvc2l0b3J5OiAnQWduaUZyb250ZW5kJywgLy8gUmVwbGFjZSB3aXRoIHlvdXIgR2l0SHViIHJlcG9zaXRvcnkgbmFtZVxuICAgICAgICBvYXV0aFRva2VuOiBjZGsuU2VjcmV0VmFsdWUuc2VjcmV0c01hbmFnZXIoJ0dpdEh1Yk9BdXRoVG9rZW5NYWluJyksIC8vIFN0b3JlIHlvdXIgR2l0SHViIE9BdXRoIHRva2VuIGluIFNlY3JldHMgTWFuYWdlclxuICAgICAgfSksXG4gICAgICAvLyBlbmFibGUgc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBwbGF0Zm9ybTogYW1wbGlmeS5QbGF0Zm9ybS5XRUJfQ09NUFVURSxcbiAgICAgIC8vIGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9hbXBsaWZ5L2xhdGVzdC91c2VyZ3VpZGUvZW52aXJvbm1lbnQtdmFyaWFibGVzLmh0bWwjYW1wbGlmeS1jb25zb2xlLWVudmlyb25tZW50LXZhcmlhYmxlc1xuICAgICAgZW52aXJvbm1lbnRWYXJpYWJsZXM6IHtcbiAgICAgICAgLy8gdGhlIGZvbGxvd2luZyBjdXN0b20gaW1hZ2UgaXMgdXNlZCB0byBzdXBwb3J0IE5leHQuanMgMTQsIHNlZSBsaW5rcyBmb3IgZGV0YWlsczpcbiAgICAgICAgLy8gMS4gaHR0cHM6Ly9hd3MuYW1hem9uLmNvbS9ibG9ncy9tb2JpbGUvNi1uZXctYXdzLWFtcGxpZnktbGF1bmNoZXMtdG8tbWFrZS1mcm9udGVuZC1kZXZlbG9wbWVudC1lYXNpZXIvXG4gICAgICAgIC8vIDIuIGh0dHBzOi8vZ2l0aHViLmNvbS9hd3MtY2xvdWRmb3JtYXRpb24vY2xvdWRmb3JtYXRpb24tY292ZXJhZ2Utcm9hZG1hcC9pc3N1ZXMvMTI5OVxuICAgICAgICAnX0NVU1RPTV9JTUFHRSc6ICdhbXBsaWZ5OmFsMjAyMycsXG4gICAgICAgICdBTVBMSUZZX1VTRVJQT09MX0lEJzogY29nbml0b191c2VyX3Bvb2xfaWRfcGFyYW1ldGVyLFxuICAgICAgICAnQ09HTklUT19VU0VSUE9PTF9DTElFTlRfSUQnOiBjb2duaXRvX3VzZXJfcG9vbF9jbGllbnRfaWRfcGFyYW1ldGVyLFxuICAgICAgICAnQVBJX0VORFBPSU5UJzogYWdlbnRfYXBpX3BhcmFtZXRlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYW1wbGlmeUNoYXRVSS5hZGRCcmFuY2goJ21haW4nLCB7c3RhZ2U6IFwiUFJPRFVDVElPTlwifSk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHN0YWNrIG91dHB1dHNcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiQW1wbGlmeUFwcFVSTFwiLCB7XG4gICAgICB2YWx1ZTogYW1wbGlmeUNoYXRVSS5kZWZhdWx0RG9tYWluLFxuICAgIH0pO1xuXG4gIH1cbn1cbiJdfQ==