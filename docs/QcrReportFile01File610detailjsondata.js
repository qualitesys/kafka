console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java 4 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.AlterUserScramCredentialsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AlterUserScramCredentialsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AlterUserScramCredentialsRequest"
 , "c2" : "AlterUserScramCredentialsRequest(AlterUserScramCredentialsRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AlterUserScramCredentialsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AlterUserScramCredentialsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.svg" }

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
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterUserScramCredentialsRequest.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00053] For method getErrorResponse list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError ApiError_fromThrowableN168255|Errors apiError_errorN168349|String apiError_messageN168444"
}} 
]
};
console.log('leListeStr 99 main end');
