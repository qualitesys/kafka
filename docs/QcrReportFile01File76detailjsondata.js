console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeConsumerGroupsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DescribeConsumerGroupsResult.java 2 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeConsumerGroupsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DescribeConsumerGroupsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DescribeConsumerGroupsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DescribeConsumerGroupsResult"
 , "c2" : "DescribeConsumerGroupsResult(Map<String,KafkaFuture<ConsumerGroupDescription>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,KafkaFuture<ConsumerGroupDescription>>"
 , "c2" : "describedGroups()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Map<String,ConsumerGroupDescription>>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeConsumerGroupsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeConsumerGroupsResult.java.svg" }

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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeConsumerGroupsResult.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class DescribeConsumerGroupsResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeConsumerGroupsResult.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.clients.admin.DescribeConsumerGroupsResult.all@POLYN170616 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
