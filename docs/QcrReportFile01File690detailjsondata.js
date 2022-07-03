console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java 12 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractResponse"
 , "c2" : "org.apache.kafka.common.requests.LeaveGroupResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.LeaveGroupResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "LeaveGroupResponse"
 , "c2" : "LeaveGroupResponse(LeaveGroupResponseData)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "LeaveGroupResponse"
 , "c2" : "LeaveGroupResponse(List<MemberResponse>;Errors;int;short)"
 , "c3" : "4"
 , "c4" : "5"
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
   "c1" : "List<MemberResponse>"
 , "c2" : "memberResponses()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Errors"
 , "c2" : "error()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Errors"
 , "c2" : "topLevelError()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Errors"
 , "c2" : "getError(Errors;List<MemberResponse>)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<Errors,Integer>"
 , "c2" : "errorCounts()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "LeaveGroupResponseData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "LeaveGroupResponse"
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
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.svg" }

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
 , "c4" : "3"
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
 , "c4" : "3"
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
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument topLevelError is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.common.requests.LeaveGroupResponse.LeaveGroupResponse@POLYN180536 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.requests.LeaveGroupResponse.LeaveGroupResponse@POLYN180536 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method getError arguments Errors  topLevelError|List&lt;MemberResponse &gt;  memberResponses"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00070] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method shouldClientThrottle arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.requests.LeaveGroupResponse.shouldClientThrottle@POLYN183725 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.LeaveGroupResponse.memberResponses@POLYN181607"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.LeaveGroupResponse.throttleTimeMs@POLYN181480"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupResponse.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.LeaveGroupResponse.toString@POLYN184272"
}} 
]
};
console.log('leListeStr 99 main end');
