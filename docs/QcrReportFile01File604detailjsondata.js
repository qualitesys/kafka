console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java 5 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.AlterPartitionReassignmentsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AlterPartitionReassignmentsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AlterPartitionReassignmentsRequest"
 , "c2" : "AlterPartitionReassignmentsRequest(AlterPartitionReassignmentsRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "AlterPartitionReassignmentsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AlterPartitionReassignmentsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "2"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
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
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00056] For method getErrorResponse list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError ApiError_fromThrowableN169395"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00061] Avoid declaring class instance within loop, performance impact"
}} 
]
};
console.log('leListeStr 99 main end');
