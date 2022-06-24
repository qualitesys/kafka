console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java 61 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ReplicaPlacer"
 , "c2" : "org.apache.kafka.metadata.placement.StripedReplicaPlacer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.placement.StripedReplicaPlacer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwInvalidReplicationFactorIfNonPositive(int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwInvalidReplicationFactorIfZero(int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "throwInvalidReplicationFactorIfTooFewBrokers(int;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "StripedReplicaPlacer"
 , "c2" : "StripedReplicaPlacer(Random)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<List<Integer>>"
 , "c2" : "place(PlacementSpec;ClusterDescriber)"
 , "c3" : "2"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "31"
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
   "c1" : "00019"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class StripedReplicaPlacer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class BrokerList contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method add arguments int  broker"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method initialize arguments Random  random"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument random is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method shuffle arguments Random  random"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method next arguments int  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN232261 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN232261 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN232261 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN232261 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN232261 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00073] The class Rack contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method initialize arguments Random  random"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method shuffle arguments Random  random"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method nextUnfenced arguments int  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method next arguments int  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.Rack.next@POLYN234647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00110] The class RackList contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument random is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument iterator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00136] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN236043 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN236043 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN236043 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN236043 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method place arguments int  replicationFactor"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00192] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00210] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00211] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00210] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00211] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN238197 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method throwInvalidReplicationFactorIfNonPositive arguments int  replicationFactor"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfNonPositive@POLYN241250 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfNonPositive@POLYN241250 the MagicNumber/String  'Invalid replication factor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfNonPositive@POLYN241250 the MagicNumber/String  ': the replication factor must be positive.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method throwInvalidReplicationFactorIfZero arguments int  numUnfenced"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfZero@POLYN241513 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfZero@POLYN241513 the MagicNumber/String  'All brokers are currently fenced.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00247] For method throwInvalidReplicationFactorIfTooFewBrokers arguments int  replicationFactor|int  numTotalBrokers"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN241730 the MagicNumber/String  'The target replication factor ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN241730 the MagicNumber/String  'of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN241730 the MagicNumber/String  ' cannot be reached because only ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN241730 the MagicNumber/String  ' broker(s) are registered.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00262] For method place arguments PlacementSpec  placement|ClusterDescriber  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#263"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00263] The argument placement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#264"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00264] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.place@POLYN242314 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
