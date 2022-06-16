console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.xml" 
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method groupMember arguments String  memberId|String  groupInstanceId|String  clientId|String  clientHost|byte[]  assignment|byte[]  metadata"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method groupMetadata arguments String  groupId|Errors  error|String  state|String  protocolType|String  protocol|List&lt;DescribedGroupMember &gt;  members|Set&lt;Byte &gt;  authorizedOperations"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method groupMetadata arguments String  groupId|Errors  error|String  state|String  protocolType|String  protocol|List&lt;DescribedGroupMember &gt;  members|int  authorizedOperations"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method forError arguments String  groupId|Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method fromError arguments int  throttleTimeMs|Errors  error|List&lt;String &gt;  groupIds"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/DescribeGroupsResponse.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.requests.DescribeGroupsResponse.shouldClientThrottle@POLYN175551 the MagicNumber/String  2 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
