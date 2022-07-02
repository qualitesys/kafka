console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java 3 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractOptions<RemoveMembersFromConsumerGroupOptions>"
 , "c2" : "org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupOptions"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupOptions" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RemoveMembersFromConsumerGroupOptions"
 , "c2" : "RemoveMembersFromConsumerGroupOptions(Collection<MemberToRemove>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "RemoveMembersFromConsumerGroupOptions"
 , "c2" : "RemoveMembersFromConsumerGroupOptions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reason(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<MemberToRemove>"
 , "c2" : "members()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "reason()"
 , "c3" : "1"
 , "c4" : "1"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument members is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.clients.admin.RemoveMembersFromConsumerGroupOptions.RemoveMembersFromConsumerGroupOptions@POLYN165705 the MagicNumber/String  'Invalid empty members has been provided' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/RemoveMembersFromConsumerGroupOptions.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method reason arguments String  reason"
}} 
]
};
console.log('leListeStr 99 main end');
