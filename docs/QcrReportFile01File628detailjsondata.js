console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java 4 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.CreatePartitionsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.CreatePartitionsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CreatePartitionsRequest"
 , "c2" : "CreatePartitionsRequest(CreatePartitionsRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CreatePartitionsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "CreatePartitionsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00049] For method getErrorResponse list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError ApiError_fromThrowableN171157"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreatePartitionsRequest.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method parse arguments ByteBuffer  buffer|short  version"
}} 
]
};
console.log('leListeStr 99 main end');
