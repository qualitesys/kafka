console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/Cluster.java 56 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
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
 , "c4" : "30"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "13"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class Cluster contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.Cluster.Cluster@POLYN219528 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.Cluster.Cluster@POLYN219528 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.Cluster.Cluster@POLYN220186 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.Cluster.Cluster@POLYN220867 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.Cluster.Cluster@POLYN221580 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument nodes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument topicIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00114] The same method call p.leader() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00136] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.Cluster.Cluster@POLYN222192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.common.Cluster.Cluster@POLYN222192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.common.Cluster.Cluster@POLYN222192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.Cluster.empty@POLYN228202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.Cluster.empty@POLYN228202 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.Cluster.empty@POLYN228202 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.Cluster.empty@POLYN228202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method bootstrap arguments List&lt;InetSocketAddress &gt;  addresses"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.common.Cluster.bootstrap@POLYN228695 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.Cluster.bootstrap@POLYN228695 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.Cluster.bootstrap@POLYN228695 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.Cluster.bootstrap@POLYN228695 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.Cluster.bootstrap@POLYN228695 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method withPartitions arguments Map&lt;TopicPartition ,PartitionInfo &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method nodeById arguments int  id"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method nodeIfOnline arguments TopicPartition  partition|int  id"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.common.Cluster.nodeIfOnline@POLYN231047 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method leaderFor arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.common.Cluster.leaderFor@POLYN231783 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.common.Cluster.leaderFor@POLYN231783 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#220"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00220] For method partition arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00225] For method partitionsForTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#230"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00230] For method partitionCountForTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.common.Cluster.partitionCountForTopic@POLYN232825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.common.Cluster.partitionCountForTopic@POLYN232825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method availablePartitionsForTopic arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method partitionsForNode arguments int  nodeId"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#278"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00278] For method topicId arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#282"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00282] For method topicName arguments Uuid  topicId"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.common.Cluster.toString@POLYN234991 the MagicNumber/String  'Cluster(id = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.common.Cluster.toString@POLYN234991 the MagicNumber/String  ', nodes = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.common.Cluster.toString@POLYN234991 the MagicNumber/String  ', partitions = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.common.Cluster.toString@POLYN234991 the MagicNumber/String  ', controller = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.common.Cluster.toString@POLYN234991 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#293"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00293] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00295] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.common.Cluster.equals@POLYN235337 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.common.Cluster.equals@POLYN235337 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.common.Cluster.equals@POLYN235337 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00166] Public method empty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/Cluster.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00201] Public method nodeIfOnline is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
