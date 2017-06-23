# CoreID User Flow

For Human Dynamics group blockchain-backed individual identity open source prototype


## User Flow:

Case Study: Alice, after setting up account with credit union
	- has not started major transactions like obtaining mortgage
	- has membership agreements and employment to verify

Home screen: Content and functionality
	- Shows dashboard with Documents/Claims Table, along with the following parameters for each document/claim:
		- File Name
		- Date Added
		- Date Signed
		- Signed
		- Verified
		- Actions
			- Forward/send
			- Delete

I. Document Signature:
	A. Functionality/behavior:
		1. A user can click on a document in their home page to sign
		2. A user will see the name of their document as the header
		3. A user can view a PDF or Word version of their document
		4. A user can see corresponding snippets of json about their document parsed and presented
		5. A user can click a "Sign" or "Sign and Send" button after reviewing document content
		6. A user can click a "Cancel" button to return to the previous screen
		7. A user can confirm a signature before a signature is created
	B. User Flow:
		1. User accesses home page with Documents/Claims Table
		2. User clicks on a document to sign
		3. Clicking on a document opens a new Individual Document view


II. Verify a Claim of Employment:
	A. Functionality/behavior:
		1. A user can click on a claim in their home page to verify a claim
		2. A user will see the name of their claim as the header
		3. A user can view a PDF or Word version of their claim
		4. A user can see corresponding snippets of json about their claim parsed and presented
		5. A user can review Statements of Intent
		6. A user must supply a recipient email address
		7. A user can optionally provide a message for the recipient
		8. A user can click a "Send request for verification" button after reviewing claim content
		9. A user can click a "Cancel" button to return to the previous screen
		10. A user can confirm a request for verification
	B. User Flow:
		1. User accesses home page with Documents/Claims Table
		2. User clicks on a document to sign
		3. Clicking on a document opens a new Individual Document view	
