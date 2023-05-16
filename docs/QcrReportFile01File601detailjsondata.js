console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.common.requests.AlterClientQuotasRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AlterClientQuotasRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#86"
 , "c1" : "AlterClientQuotasRequest"
 , "c2" : "AlterClientQuotasRequest(AlterClientQuotasRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#91"
 , "c1" : "List&lt;ClientQuotaAlteration&gt;"
 , "c2" : "entries()"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#110"
 , "c1" : "boolean"
 , "c2" : "validateOnly()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#115"
 , "c1" : "AlterClientQuotasRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#120"
 , "c1" : "AlterClientQuotasResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#141"
 , "c1" : "AlterClientQuotasRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.svg" }

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
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
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
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument entries is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00048] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00049] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00055] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00056] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.Builder.Builder@POLYN168446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.Builder.Builder@POLYN168446 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.Builder.Builder@POLYN168446 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00099] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00100] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.entries@POLYN171017 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AlterClientQuotasRequest.Builder.toString@POLYN170602"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AlterClientQuotasRequest.validateOnly@POLYN172512"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
