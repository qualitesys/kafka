console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java 57 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ReplicaPlacer"
 , "c2" : "org.apache.kafka.metadata.placement.StripedReplicaPlacer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.placement.StripedReplicaPlacer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00402"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#402"
 , "c1" : "void"
 , "c2" : "throwInvalidReplicationFactorIfNonPositive(int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00409"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#409"
 , "c1" : "void"
 , "c2" : "throwInvalidReplicationFactorIfZero(int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00415"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#415"
 , "c1" : "void"
 , "c2" : "throwInvalidReplicationFactorIfTooFewBrokers(int;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00425"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#425"
 , "c1" : "StripedReplicaPlacer"
 , "c2" : "StripedReplicaPlacer(Random)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00430"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#430"
 , "c1" : "List&lt;List&lt;Integer&gt;&gt;"
 , "c2" : "place(PlacementSpec;ClusterDescriber)"
 , "c3" : "2"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "31"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "13"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method add arguments int  broker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method initialize arguments Random  random"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#155"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00155] The argument random is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method shuffle arguments Random  random"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method next arguments int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN225847 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN225847 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN225847 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN225847 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.BrokerList.next@POLYN225847 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method initialize arguments Random  random"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#216"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00216] For method shuffle arguments Random  random"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#238"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00238] For method nextUnfenced arguments int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#251"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00251] For method next arguments int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.Rack.next@POLYN228233 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#300"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00300] The argument random is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#300"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00300] The argument iterator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00305] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN229629 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN229629 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN229629 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.RackList@POLYN229629 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#341"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00341] For method place arguments int  replicationFactor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00359] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00360] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00378] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00379] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00378] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00379] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00373"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.RackList.place@POLYN231783 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#402"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00402] For method throwInvalidReplicationFactorIfNonPositive arguments int  replicationFactor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfNonPositive@POLYN234836 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfNonPositive@POLYN234836 the MagicNumber/String  'Invalid replication factor ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfNonPositive@POLYN234836 the MagicNumber/String  ': the replication factor must be positive.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#409"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00409] For method throwInvalidReplicationFactorIfZero arguments int  numUnfenced"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfZero@POLYN235099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfZero@POLYN235099 the MagicNumber/String  'All brokers are currently fenced.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#415"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00415] For method throwInvalidReplicationFactorIfTooFewBrokers arguments int  replicationFactor|int  numTotalBrokers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN235316 the MagicNumber/String  'The target replication factor ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN235316 the MagicNumber/String  'of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN235316 the MagicNumber/String  ' cannot be reached because only ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.throwInvalidReplicationFactorIfTooFewBrokers@POLYN235316 the MagicNumber/String  ' broker(s) are registered.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#430"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00430] For method place arguments PlacementSpec  placement|ClusterDescriber  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#431"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00431] The argument placement is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#432"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00432] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.metadata.placement.StripedReplicaPlacer.place@POLYN235900 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/placement/StripedReplicaPlacer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
