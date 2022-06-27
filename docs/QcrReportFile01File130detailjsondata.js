console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java 19 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RemoveMembersFromConsumerGroupResult"
 , "c2" : "RemoveMembersFromConsumerGroupResult(KafkaFuture<Map<MemberIdentity,Errors>>;Set<MemberToRemove>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "all()"
 , "c3" : "9"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Void>"
 , "c2" : "memberResult(MemberToRemove)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybeCompleteExceptionally(Map<MemberIdentity,Errors>;MemberIdentity;KafkaFutureImpl<Void>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "removeAll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class RemoveMembersFromConsumerGroupResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.all@POLYN172127 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.all@POLYN172127 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.all@POLYN172127 the MagicNumber/String  'Encounter exception when trying to remove: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.all@POLYN172127 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method memberResult arguments MemberToRemove  member"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument member is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.memberResult@POLYN173613 the MagicNumber/String  'The method: memberResult is not applicable in 'removeAll' mode' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.memberResult@POLYN173613 the MagicNumber/String  'Member ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.memberResult@POLYN173613 the MagicNumber/String  ' was not included in the original request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.memberResult@POLYN173613 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.memberResult@POLYN173613 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method maybeCompleteExceptionally arguments Map&lt;MemberIdentity ,Errors &gt;  memberErrors|MemberIdentity  member|KafkaFutureImpl&lt;Void &gt;  result"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.maybeCompleteExceptionally@POLYN174674 the MagicNumber/String  'Member \'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.maybeCompleteExceptionally@POLYN174674 the MagicNumber/String  '\' was not included in the removal response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.maybeCompleteExceptionally@POLYN174674 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.maybeCompleteExceptionally@POLYN174674 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupResult.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupResult.maybeCompleteExceptionally@POLYN174674 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
