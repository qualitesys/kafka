console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java 12 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
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
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method build arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.requests.DeleteAclsRequest.normalizeAndValidate@POLYN176678 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.requests.DeleteAclsRequest.normalizeAndValidate@POLYN176678 the MagicNumber/String  'Version 0 does not support pattern type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.DeleteAclsRequest.normalizeAndValidate@POLYN176678 the MagicNumber/String  ' (only LITERAL and ANY are supported)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.requests.DeleteAclsRequest.normalizeAndValidate@POLYN176678 the MagicNumber/String  'Filters contain UNKNOWN elements, filters: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method getErrorResponse arguments int  throttleTimeMs|Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method deleteAclsFilter arguments AclBindingFilter  filter"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method aclBindingFilter arguments DeleteAclsFilter  filter"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DeleteAclsRequest.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
