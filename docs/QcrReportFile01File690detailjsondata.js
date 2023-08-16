console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java 18 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractRequest"
 , "c2" : ""
 , "c2" : "org.apache.kafka.common.requests.LeaveGroupRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.LeaveGroupRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#85"
 , "c1" : "LeaveGroupRequest"
 , "c2" : "LeaveGroupRequest(LeaveGroupRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#91"
 , "c1" : "LeaveGroupRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#95"
 , "c1" : "List&lt;MemberIdentity&gt;"
 , "c2" : "members()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#103"
 , "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#113"
 , "c1" : "LeaveGroupRequest"
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

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
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
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument members is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.Builder@POLYN165141 the MagicNumber/String  'leaving members should not be empty' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.build@POLYN165755 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.build@POLYN165755 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.build@POLYN165755 the MagicNumber/String  'Version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.build@POLYN165755 the MagicNumber/String  ' leave group request only ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.build@POLYN165755 the MagicNumber/String  'supports single member instance than ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.build@POLYN165755 the MagicNumber/String  ' members' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.build@POLYN165755 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.toString@POLYN166736 the MagicNumber/String  '(type=LeaveGroupRequest' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.toString@POLYN166736 the MagicNumber/String  ', groupId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.toString@POLYN166736 the MagicNumber/String  ', members=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.requests.LeaveGroupRequest.Builder.toString@POLYN166736 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.requests.LeaveGroupRequest.members@POLYN167408 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.requests.LeaveGroupRequest.getErrorResponse@POLYN167725 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method parse arguments ByteBuffer  buffer|short  version"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/LeaveGroupRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
