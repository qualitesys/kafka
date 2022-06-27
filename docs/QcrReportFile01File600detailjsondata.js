console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java 21 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRequest"
 , "c2" : "org.apache.kafka.common.requests.AlterClientQuotasRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.AlterClientQuotasRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AlterClientQuotasRequest"
 , "c2" : "AlterClientQuotasRequest(AlterClientQuotasRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "List<ClientQuotaAlteration>"
 , "c2" : "entries()"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "validateOnly()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AlterClientQuotasRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AlterClientQuotasResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "AlterClientQuotasRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.svg" }

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
 , "c4" : "1"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument entries is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00033] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00034] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00040] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00041] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.Builder.Builder@POLYN179968 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.Builder.Builder@POLYN179968 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.Builder.Builder@POLYN179968 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.requests.AlterClientQuotasRequest.entries@POLYN182539 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00109] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/AlterClientQuotasRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.AlterClientQuotasRequest.validateOnly@POLYN184034"
}} 
]
};
console.log('leListeStr 99 main end');
