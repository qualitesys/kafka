console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.ApiVersionsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.ApiVersionsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ApiVersionsRequest"
 , "c2" : "ApiVersionsRequest(ApiVersionsRequestData;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsRequest"
 , "c2" : "ApiVersionsRequest(ApiVersionsRequestData;short;Short)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasUnsupportedRequestVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isValid()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ApiVersionsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.requests.ApiVersionsRequest.ApiVersionsRequest@POLYN170313 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.requests.ApiVersionsRequest.hasUnsupportedRequestVersion@POLYN170841 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.requests.ApiVersionsRequest.isValid@POLYN170951 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.requests.ApiVersionsRequest.isValid@POLYN170951 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.requests.ApiVersionsRequest.getErrorResponse@POLYN171473 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/ApiVersionsRequest.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method parse arguments ByteBuffer  buffer|short  version"
}} 
]
};
console.log('leListeStr 99 main end');
