console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java 6 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.DescribeTransactionsRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DescribeTransactionsRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeTransactionsRequest"
 , "c2" : "DescribeTransactionsRequest(DescribeTransactionsRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "DescribeTransactionsRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DescribeTransactionsResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "DescribeTransactionsRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.svg" }

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
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method toString arguments boolean  verbose"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeTransactionsRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeTransactionsRequest.toString@POLYN166698"
}} 
]
};
console.log('leListeStr 99 main end');
