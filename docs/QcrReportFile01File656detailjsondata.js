console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java 4 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.common.requests.DescribeProducersResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DescribeProducersResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#33"
 , "c1" : "DescribeProducersResponse"
 , "c2" : "DescribeProducersResponse(DescribeProducersResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#39"
 , "c1" : "DescribeProducersResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#44"
 , "c1" : "Map&lt;Errors,Integer&gt;"
 , "c2" : "errorCounts()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#54"
 , "c1" : "DescribeProducersResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#60"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#65"
 , "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.svg" }

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
 , "c4" : "2"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeProducersResponse.throttleTimeMs@POLYN158161"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeProducersResponse.toString@POLYN158041"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeProducersResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
