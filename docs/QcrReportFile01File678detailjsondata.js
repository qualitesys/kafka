console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java 14 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.xml" 
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
 , "c4" : "6"
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
 , "c4" : "2"
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
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.requests.FindCoordinatorResponse.shouldClientThrottle@POLYN175968 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.requests.FindCoordinatorResponse.coordinators@POLYN176129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method prepareOldResponse arguments Errors  error|Node  node"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method prepareResponse arguments Errors  error|String  key|Node  node"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument node is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method prepareErrorResponse arguments Errors  error|List&lt;String &gt;  keys"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FindCoordinatorResponse.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
]
};
console.log('leListeStr 99 main end');
