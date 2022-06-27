console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/MetadataCache.java 28 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.MetadataCache"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.MetadataCache" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MetadataCache"
 , "c2" : "MetadataCache(String;Map<Integer,Node>;Collection<PartitionMetadata>;Set<String>;Set<String>;Set<String>;Node;Map<String,Uuid>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MetadataCache"
 , "c2" : "MetadataCache(String;Map<Integer,Node>;Collection<PartitionMetadata>;Set<String>;Set<String>;Set<String>;Node;Map<String,Uuid>;Cluster)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Optional<PartitionMetadata>"
 , "c2" : "partitionMetadata(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Uuid>"
 , "c2" : "topicIds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Node>"
 , "c2" : "nodeById(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Cluster"
 , "c2" : "cluster()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ClusterResource"
 , "c2" : "clusterResource()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MetadataCache"
 , "c2" : "mergeWith(String;Map<Integer,Node>;Collection<PartitionMetadata>;Set<String>;Set<String>;Set<String>;Node;Map<String,Uuid>;BiPredicate<String,Boolean>)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "computeClusterView()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "MetadataCache"
 , "c2" : "bootstrap(List<InetSocketAddress>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "MetadataCache"
 , "c2" : "empty()"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.svg" }

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
 , "c4" : "5"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "17"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00027] The class MetadataCache contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.clients.MetadataCache.MetadataCache@POLYN198535 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.MetadataCache.MetadataCache@POLYN199163 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method partitionMetadata arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method nodeById arguments int  id"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.MetadataCache.cluster@POLYN201080 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.MetadataCache.cluster@POLYN201080 the MagicNumber/String  'Cached Cluster instance should not be null, but was.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method mergeWith arguments String  newClusterId|Map&lt;Integer ,Node &gt;  newNodes|Collection&lt;PartitionMetadata &gt;  addPartitions|Set&lt;String &gt;  addUnauthorizedTopics|Set&lt;String &gt;  addInvalidTopics|Set&lt;String &gt;  addInternalTopics|Node  newController|Map&lt;String ,Uuid &gt;  topicIds|BiPredicate&lt;String ,Boolean &gt;  retainTopic"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#106"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00106] The argument addPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument topicIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#112"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00112] The argument retainTopic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.MetadataCache.mergeWith@POLYN201885 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#149"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00149] The argument predicate is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method bootstrap arguments List&lt;InetSocketAddress &gt;  addresses"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.clients.MetadataCache.bootstrap@POLYN206389 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.clients.MetadataCache.bootstrap@POLYN206389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.MetadataCache.bootstrap@POLYN206389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.clients.MetadataCache.empty@POLYN207391 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.clients.MetadataCache.empty@POLYN207391 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.clients.MetadataCache.toString@POLYN207849 the MagicNumber/String  'MetadataCache{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.clients.MetadataCache.toString@POLYN207849 the MagicNumber/String  'clusterId='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.clients.MetadataCache.toString@POLYN207849 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.MetadataCache.toString@POLYN207849 the MagicNumber/String  ', nodes=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.clients.MetadataCache.toString@POLYN207849 the MagicNumber/String  ', partitions=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.clients.MetadataCache.toString@POLYN207849 the MagicNumber/String  ', controller=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/MetadataCache.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.clients.MetadataCache.toString@POLYN207849 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
