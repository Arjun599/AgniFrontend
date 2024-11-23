"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://docs.amplify.aws/nextjs/build-a-backend/auth/set-up-auth/
const aws_amplify_1 = require("aws-amplify");
aws_amplify_1.Amplify.configure({
    Auth: {
        Cognito: {
            //  Amazon Cognito User Pool ID
            userPoolId: process.env.NEXT_PUBLIC_AMPLIFY_USERPOOL_ID || '',
            // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
            userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USERPOOL_CLIENT_ID || '',
            // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
            // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
            // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
            // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
            signUpVerificationMethod: 'code', // 'code' | 'link'
        }
    }
});
// You can get the current config object
const currentConfig = aws_amplify_1.Amplify.getConfig();
exports.default = currentConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWV4cG9ydHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhd3MtZXhwb3J0cy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvRUFBb0U7QUFDcEUsNkNBQXNDO0FBRXRDLHFCQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRTtZQUNQLCtCQUErQjtZQUMvQixVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsSUFBSSxFQUFFO1lBQzdELHdFQUF3RTtZQUN4RSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxJQUFJLEVBQUU7WUFDMUUsK0VBQStFO1lBQy9FLG9FQUFvRTtZQUNwRSxxRUFBcUU7WUFDckUsb0ZBQW9GO1lBQ3BGLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxrQkFBa0I7U0FDckQ7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVILHdDQUF3QztBQUN4QyxNQUFNLGFBQWEsR0FBRyxxQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRTFDLGtCQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZG9jcy5hbXBsaWZ5LmF3cy9uZXh0anMvYnVpbGQtYS1iYWNrZW5kL2F1dGgvc2V0LXVwLWF1dGgvXG5pbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSAnYXdzLWFtcGxpZnknO1xuXG5BbXBsaWZ5LmNvbmZpZ3VyZSh7XG4gIEF1dGg6IHtcbiAgICBDb2duaXRvOiB7XG4gICAgICAvLyAgQW1hem9uIENvZ25pdG8gVXNlciBQb29sIElEXG4gICAgICB1c2VyUG9vbElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTVBMSUZZX1VTRVJQT09MX0lEIHx8ICcnLFxuICAgICAgLy8gT1BUSU9OQUwgLSBBbWF6b24gQ29nbml0byBXZWIgQ2xpZW50IElEICgyNi1jaGFyIGFscGhhbnVtZXJpYyBzdHJpbmcpXG4gICAgICB1c2VyUG9vbENsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT0dOSVRPX1VTRVJQT09MX0NMSUVOVF9JRCB8fCAnJyxcbiAgICAgIC8vIFJFUVVJUkVEIG9ubHkgZm9yIEZlZGVyYXRlZCBBdXRoZW50aWNhdGlvbiAtIEFtYXpvbiBDb2duaXRvIElkZW50aXR5IFBvb2wgSURcbiAgICAgIC8vIGlkZW50aXR5UG9vbElkOiAnWFgtWFhYWC1YOlhYWFhYWFhYLVhYWFgtMTIzNC1hYmNkLTEyMzQ1Njc4OTBhYicsXG4gICAgICAvLyBPUFRJT05BTCAtIFRoaXMgaXMgdXNlZCB3aGVuIGF1dG9TaWduSW4gaXMgZW5hYmxlZCBmb3IgQXV0aC5zaWduVXBcbiAgICAgIC8vICdjb2RlJyBpcyB1c2VkIGZvciBBdXRoLmNvbmZpcm1TaWduVXAsICdsaW5rJyBpcyB1c2VkIGZvciBlbWFpbCBsaW5rIHZlcmlmaWNhdGlvblxuICAgICAgc2lnblVwVmVyaWZpY2F0aW9uTWV0aG9kOiAnY29kZScsIC8vICdjb2RlJyB8ICdsaW5rJ1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIFlvdSBjYW4gZ2V0IHRoZSBjdXJyZW50IGNvbmZpZyBvYmplY3RcbmNvbnN0IGN1cnJlbnRDb25maWcgPSBBbXBsaWZ5LmdldENvbmZpZygpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50Q29uZmlnOyJdfQ==