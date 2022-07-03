console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java 11 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.consumer.ConsumerGroupMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.ConsumerGroupMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConsumerGroupMetadata"
 , "c2" : "ConsumerGroupMetadata(String;int;String;Optional<String>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerGroupMetadata"
 , "c2" : "ConsumerGroupMetadata(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "groupId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "generationId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "memberId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<String>"
 , "c2" : "groupInstanceId()"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.svg" }

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
 , "c4" : "8"
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
   "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class ConsumerGroupMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.ConsumerGroupMetadata@POLYN170313 the MagicNumber/String  'group.id can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.ConsumerGroupMetadata@POLYN170313 the MagicNumber/String  'member.id can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.ConsumerGroupMetadata@POLYN170313 the MagicNumber/String  'group.instance.id can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.toString@POLYN171523 the MagicNumber/String  'GroupMetadata(groupId = %s, generationId = %d, memberId = %s, groupInstanceId = %s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.toString@POLYN171523 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00061] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.equals@POLYN171793 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.equals@POLYN171793 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerGroupMetadata.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.consumer.ConsumerGroupMetadata.equals@POLYN171793 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
