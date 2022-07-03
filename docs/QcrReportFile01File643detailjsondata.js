console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java 20 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.DescribeClientQuotasResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DescribeClientQuotasResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeClientQuotasResponse"
 , "c2" : "DescribeClientQuotasResponse(DescribeClientQuotasResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "complete(KafkaFutureImpl<Map<ClientQuotaEntity,Map<String,Double>>>)"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "throttleTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DescribeClientQuotasResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Errors,Integer>"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DescribeClientQuotasResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DescribeClientQuotasResponse"
 , "c2" : "fromQuotaEntities(Map<ClientQuotaEntity,Map<String,Double>>;int)"
 , "c3" : "4"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
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
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method complete arguments KafkaFutureImpl&lt;Map&lt;ClientQuotaEntity ,Map&lt;String ,Double &gt; &gt; &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00038] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00039] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method fromQuotaEntities arguments Map&lt;ClientQuotaEntity ,Map&lt;String ,Double &gt; &gt;  entities|int  throttleTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument entities is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00077] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.requests.DescribeClientQuotasResponse.fromQuotaEntities@POLYN183936 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.requests.DescribeClientQuotasResponse.fromQuotaEntities@POLYN183936 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeClientQuotasResponse.complete@POLYN181368"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeClientQuotasResponse.errorCounts@POLYN183481"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeClientQuotasResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeClientQuotasResponse.throttleTimeMs@POLYN183224"
}} 
]
};
console.log('leListeStr 99 main end');
