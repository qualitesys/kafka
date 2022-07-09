console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java 4 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.LocalReplicaChanges"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.LocalReplicaChanges" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "LocalReplicaChanges"
 , "c2" : "LocalReplicaChanges(Set<TopicPartition>;Map<TopicPartition,PartitionInfo>;Map<TopicPartition,PartitionInfo>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "deletes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,PartitionInfo>"
 , "c2" : "leaders()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,PartitionInfo>"
 , "c2" : "followers()"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class LocalReplicaChanges contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.image.LocalReplicaChanges.toString@POLYN147725 the MagicNumber/String  'LocalReplicaChanges(deletes = %s, leaders = %s, followers = %s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00049] The class PartitionInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/LocalReplicaChanges.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.image.LocalReplicaChanges.PartitionInfo.toString@POLYN148277 the MagicNumber/String  'PartitionInfo(topicId = %s, partition = %s)' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
