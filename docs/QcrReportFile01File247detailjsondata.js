console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java 13 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.StickyPartitionCache"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.StickyPartitionCache" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StickyPartitionCache"
 , "c2" : "StickyPartitionCache()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "partition(String;Cluster)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "nextPartition(String;Cluster;int)"
 , "c3" : "9"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.svg" }

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
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class StickyPartitionCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method partition arguments String  topic|Cluster  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.partition@POLYN168819 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.partition@POLYN168819 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method nextPartition arguments String  topic|Cluster  cluster|int  prevPartition"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00028] For method nextPartition list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_partitionsForTopicN169409|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_availablePartitionsForTopicN169790|int Utils_toPositiveN169977|int Utils_toPositiveN170568"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.nextPartition@POLYN169241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.nextPartition@POLYN169241 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.nextPartition@POLYN169241 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.nextPartition@POLYN169241 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.nextPartition@POLYN169241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/StickyPartitionCache.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.producer.internals.StickyPartitionCache.nextPartition@POLYN169241 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
