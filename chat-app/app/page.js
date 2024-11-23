"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_amplify_1 = require("aws-amplify");
const ui_react_1 = require("@aws-amplify/ui-react");
require("@aws-amplify/ui-react/styles.css");
const ChatApp_1 = require("./components/ChatApp");
const aws_exports_1 = require("./aws-exports");
aws_amplify_1.Amplify.configure(aws_exports_1.default, { ssr: true });
function IndexPage() {
    const formFields = {
        signUp: {
            username: {
                order: 1,
            },
            email: {
                order: 2,
            },
            password: {
                order: 3,
            },
            confirm_password: {
                order: 4,
            },
        },
    };
    return (<ui_react_1.Authenticator formFields={formFields} signUpAttributes={["email"]}>
      {({ signOut, user }) => (<div className="min-h-screen flex flex-col justify-center items-center">
          <header className="bg-white p-4 shadow-sm shadow-gray-300 w-full flex justify-between">
            <h1 className="text-2xl pt-1 font-bold bg-gradient-to-r text-transparent from-indigo-500 to-orange-500 bg-clip-text">
              Chatty
            </h1>
            <div className="flex items-center">
              <div className="mr-4 text-gray-600 hover:text-gray-80">
                Welcome <span className="font-bold">{user?.username}</span>!
              </div>
              <button onClick={signOut} className="px-4 h-10 text-gray-600 hover:text-sky-700 hover:shadow-sm  hover:underline  focus:outline-none">
                Sign out
              </button>
            </div>
          </header>
          <main className="flex-grow mt-4 flex items-center justify-center w-3/4">
            <ChatApp_1.default />
          </main>
          <footer className="bg-white p-4 shadow-sm w-full text-xs">
            <p className="text-center text-gray-600">
              &copy; {new Date().getFullYear()} Your Company, all rights
              reserved.
            </p>
            <p className="text-center text-gray-600 text-xs">
              AI answers should be verified before use.
            </p>
          </footer>
        </div>)}
    </ui_react_1.Authenticator>);
}
exports.default = IndexPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxZQUFZLENBQUM7O0FBRWIsNkNBQXNDO0FBQ3RDLG9EQUFzRDtBQUN0RCw0Q0FBMEM7QUFDMUMsa0RBQTJDO0FBQzNDLCtDQUFzQztBQUV0QyxxQkFBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBUyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFFNUMsU0FBd0IsU0FBUztJQUMvQixNQUFNLFVBQVUsR0FBRztRQUNqQixNQUFNLEVBQUU7WUFDTixRQUFRLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7YUFDVDtZQUNELEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsQ0FBQzthQUNUO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLEtBQUssRUFBRSxDQUFDO2FBQ1Q7WUFDRCxnQkFBZ0IsRUFBRTtnQkFDaEIsS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGO0tBQ0YsQ0FBQztJQUVGLE9BQU8sQ0FDTCxDQUFDLHdCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ2pFO01BQUEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUN0QixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsd0RBQXdELENBQ3JFO1VBQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG9FQUFvRSxDQUNwRjtZQUFBLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxzR0FBc0csQ0FDbEg7O1lBQ0YsRUFBRSxFQUFFLENBQ0o7WUFBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQ2hDO2NBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUNwRDt3QkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUM3RCxFQUFFLEdBQUcsQ0FDTDtjQUFBLENBQUMsTUFBTSxDQUNMLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUNqQixTQUFTLENBQUMsaUdBQWlHLENBRTNHOztjQUNGLEVBQUUsTUFBTSxDQUNWO1lBQUEsRUFBRSxHQUFHLENBQ1A7VUFBQSxFQUFFLE1BQU0sQ0FDUjtVQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1REFBdUQsQ0FDckU7WUFBQSxDQUFDLGlCQUFPLENBQUMsQUFBRCxFQUNWO1VBQUEsRUFBRSxJQUFJLENBQ047VUFBQSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsdUNBQXVDLENBQ3ZEO1lBQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUN0QztxQkFBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUU7O1lBRXBDLEVBQUUsQ0FBQyxDQUNIO1lBQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLG1DQUFtQyxDQUM5Qzs7WUFDRixFQUFFLENBQUMsQ0FDTDtVQUFBLEVBQUUsTUFBTSxDQUNWO1FBQUEsRUFBRSxHQUFHLENBQUMsQ0FDUCxDQUNIO0lBQUEsRUFBRSx3QkFBYSxDQUFDLENBQ2pCLENBQUM7QUFDSixDQUFDO0FBdERELDRCQXNEQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSBcImF3cy1hbXBsaWZ5XCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdG9yIH0gZnJvbSBcIkBhd3MtYW1wbGlmeS91aS1yZWFjdFwiO1xuaW1wb3J0IFwiQGF3cy1hbXBsaWZ5L3VpLXJlYWN0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCBDaGF0QXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2hhdEFwcFwiO1xuaW1wb3J0IGF3c2NvbmZpZyBmcm9tIFwiLi9hd3MtZXhwb3J0c1wiO1xuXG5BbXBsaWZ5LmNvbmZpZ3VyZShhd3Njb25maWcsIHsgc3NyOiB0cnVlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG4gIGNvbnN0IGZvcm1GaWVsZHMgPSB7XG4gICAgc2lnblVwOiB7XG4gICAgICB1c2VybmFtZToge1xuICAgICAgICBvcmRlcjogMSxcbiAgICAgIH0sXG4gICAgICBlbWFpbDoge1xuICAgICAgICBvcmRlcjogMixcbiAgICAgIH0sXG4gICAgICBwYXNzd29yZDoge1xuICAgICAgICBvcmRlcjogMyxcbiAgICAgIH0sXG4gICAgICBjb25maXJtX3Bhc3N3b3JkOiB7XG4gICAgICAgIG9yZGVyOiA0LFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhlbnRpY2F0b3IgZm9ybUZpZWxkcz17Zm9ybUZpZWxkc30gc2lnblVwQXR0cmlidXRlcz17W1wiZW1haWxcIl19PlxuICAgICAgeyh7IHNpZ25PdXQsIHVzZXIgfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHNoYWRvdy1zbSBzaGFkb3ctZ3JheS0zMDAgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgcHQtMSBmb250LWJvbGQgYmctZ3JhZGllbnQtdG8tciB0ZXh0LXRyYW5zcGFyZW50IGZyb20taW5kaWdvLTUwMCB0by1vcmFuZ2UtNTAwIGJnLWNsaXAtdGV4dFwiPlxuICAgICAgICAgICAgICBDaGF0dHlcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS04MFwiPlxuICAgICAgICAgICAgICAgIFdlbGNvbWUgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3VzZXI/LnVzZXJuYW1lfTwvc3Bhbj4hXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IGgtMTAgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LXNreS03MDAgaG92ZXI6c2hhZG93LXNtICBob3Zlcjp1bmRlcmxpbmUgIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIG91dFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBtdC00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMy80XCI+XG4gICAgICAgICAgICA8Q2hhdEFwcCAvPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBzaGFkb3ctc20gdy1mdWxsIHRleHQteHNcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFlvdXIgQ29tcGFueSwgYWxsIHJpZ2h0c1xuICAgICAgICAgICAgICByZXNlcnZlZC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICBBSSBhbnN3ZXJzIHNob3VsZCBiZSB2ZXJpZmllZCBiZWZvcmUgdXNlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9BdXRoZW50aWNhdG9yPlxuICApO1xufVxuIl19