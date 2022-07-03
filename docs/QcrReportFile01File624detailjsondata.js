console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java 16 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.CreateAclsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.CreateAclsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CreateAclsRequest"
 , "c2" : "CreateAclsRequest(CreateAclsRequestData;short)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "List<AclCreation>"
 , "c2" : "aclCreations()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CreateAclsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "CreateAclsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validate(CreateAclsRequestData)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "AclBinding"
 , "c2" : "aclBinding(AclCreation)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "AclCreation"
 , "c2" : "aclCreation(AclBinding)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AclCreationResult"
 , "c2" : "aclResult(Throwable)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method getErrorResponse arguments int  throttleTimeMs|Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method getErrorResponse list of called methods Object monObjet|AclCreationResult CreateAclsRequest_aclResultN184670"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method validate arguments CreateAclsRequestData  data"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.requests.CreateAclsRequest.validate@POLYN185383 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.requests.CreateAclsRequest.validate@POLYN185383 the MagicNumber/String  'Version 0 only supports literal resource pattern types' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.requests.CreateAclsRequest.validate@POLYN185383 the MagicNumber/String  'CreatableAcls contain unknown elements: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method aclBinding arguments AclCreation  acl"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument acl is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method aclCreation arguments AclBinding  binding"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument binding is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method aclResult arguments Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00116] For method aclResult list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError ApiError_fromThrowableN188176"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/CreateAclsRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.CreateAclsRequest.aclCreations@POLYN184320"
}} 
]
};
console.log('leListeStr 99 main end');
