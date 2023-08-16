console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRequest"
 , "c2" : ""
 , "c2" : "org.apache.kafka.common.requests.AlterPartitionReassignmentsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AlterPartitionReassignmentsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#56"
 , "c1" : "AlterPartitionReassignmentsRequest"
 , "c2" : "AlterPartitionReassignmentsRequest(AlterPartitionReassignmentsRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#61"
 , "c1" : "AlterPartitionReassignmentsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#66"
 , "c1" : "AlterPartitionReassignmentsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#71"
 , "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "2"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00071] For method getErrorResponse list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError ApiError_fromThrowableN163091"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AlterPartitionReassignmentsRequest.Builder.toString@POLYN162177"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterPartitionReassignmentsRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
