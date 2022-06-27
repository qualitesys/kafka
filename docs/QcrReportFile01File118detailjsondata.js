console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java 12 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.MemberAssignment"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.MemberAssignment" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MemberAssignment"
 , "c2" : "MemberAssignment(Set<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
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
   "c1" : "Set<TopicPartition>"
 , "c2" : "topicPartitions()"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.svg" }

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
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
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
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class MemberAssignment contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.clients.admin.MemberAssignment.MemberAssignment@POLYN163123 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00025] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.clients.admin.MemberAssignment.equals@POLYN163493 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.clients.admin.MemberAssignment.equals@POLYN163493 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.clients.admin.MemberAssignment.equals@POLYN163493 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.clients.admin.MemberAssignment.hashCode@POLYN164016 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.clients.admin.MemberAssignment.hashCode@POLYN164016 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.admin.MemberAssignment.toString@POLYN164360 the MagicNumber/String  '(topicPartitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.admin.MemberAssignment.toString@POLYN164360 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/MemberAssignment.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.admin.MemberAssignment.toString@POLYN164360 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
