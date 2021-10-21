# Introduction to Networked Applications

**Networked Applications** are applications which provide a service to individual end-users so that different users accessing the application will receive data or content that is tailored specifically to them.
In leiu of pre-defined logic or static pages, networked applications provide *dynamically* generated content.

## Static Content
The HTTP Response body contains text which is the same with every request. 
HTML, JS, CSS, Images are all static content. 
Any animation or interaction occurs *client-side* in the browser.

Request/Response:
- Client requests file
- HTTP Server receives request and checks file directory for file
- HTTP server issues resopnse to browser with file contents as body of the response
- Browser parses body and displays/executes

## Dynamic Content
File must be created JIT for request.
Usually consists of Data (from database) combined with HTML Template.

Request/Response:
- Client requests resource `/lion`
- HTTP Server receives request for path `/lion` 
- HTTP server identifies this is dynamic content request and passes details of request to application server for processing.
- Application server receives request from HTTP server and generates content using details based on application (fetching data, combining with HTML template, etc).
- Finished content passed back to HTTP server
- HTTP server sends HTTP response
- Browser parses and renders.

From Browser-perspective, it is all static content.

## Single Page Applications:
Exception which is not covered in the couuse.

# History of Networked Applications

## Early Days
Servers just served static data.
Programming languages were written and executed locally.
Server-side Scripts were unstandardized and complex.

## CGI (Common Gateway Interface)
Standard where HTTP request details were stored in environment variables (e.g. `PATH` AND `QUERY_STRING`)
Scripts could use variables and use them to create dynamic content using virtually any language.

## LAMP stack
- Linux: Server OS
- Apache: HTTP Server
- MySQL: relational database
- Perl (Early CGI Scripts) => PHP => Python

Every element of the stack was open-source and free.
*Software Stack* or **Development Stack** refers to the separation of concerns between components.

## Libraries and Frameworks
Libraries are collecitons of pre-defined functions and classes for completing common tasks.
Frameworks provide a particualar structure for solving a problem.

## Front End Shift
Recently, much of the dynamic content responsibility is placed on client in order to provide a more reactive experience.
- Native Mobile apps
- Browser continuing sophistication.

# HTML











