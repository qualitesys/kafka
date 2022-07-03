console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java 26 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.DescribeAclsResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.DescribeAclsResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeAclsResponse"
 , "c2" : "DescribeAclsResponse(DescribeAclsResponseData;short)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "DescribeAclsResponse"
 , "c2" : "DescribeAclsResponse(DescribeAclsResponseData)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "DescribeAclsResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "ApiError"
 , "c2" : "error()"
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
   "c1" : "List<DescribeAclsResource>"
 , "c2" : "acls()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DescribeAclsResponse"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldClientThrottle(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validate(Optional<Short>)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Stream<AclBinding>"
 , "c2" : "aclBindings(DescribeAclsResource)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "List<AclBinding>"
 , "c2" : "aclBindings(List<DescribeAclsResource>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<DescribeAclsResource>"
 , "c2" : "aclsResources(Collection<AclBinding>)"
 , "c3" : "4"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "7"
}}
,
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
 , "c4" : "6"
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
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.requests.DescribeAclsResponse.shouldClientThrottle@POLYN190335 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method validate arguments Optional&lt;Short &gt;  version"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00081] For method validate list of called methods Object monObjet|java.util.List&lt;DescribeAclsResource&gt; aclsN190713"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument version is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.requests.DescribeAclsResponse.validate@POLYN190459 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.requests.DescribeAclsResponse.validate@POLYN190459 the MagicNumber/String  'Version 0 only supports literal resource pattern types' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.requests.DescribeAclsResponse.validate@POLYN190459 the MagicNumber/String  'Contain UNKNOWN elements' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.requests.DescribeAclsResponse.validate@POLYN190459 the MagicNumber/String  'Contain UNKNOWN elements' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method aclBindings arguments DescribeAclsResource  resource"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument resource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method aclBindings arguments List&lt;DescribeAclsResource &gt;  resources"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#116"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00116] The argument resources is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method aclsResources arguments Collection&lt;AclBinding &gt;  acls"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeAclsResponse.acls@POLYN189919"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeAclsResponse.aclsResources@POLYN193009"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeAclsResponse.errorCounts@POLYN189722"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeAclsResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.DescribeAclsResponse.throttleTimeMs@POLYN189340"
}} 
]
};
console.log('leListeStr 99 main end');
