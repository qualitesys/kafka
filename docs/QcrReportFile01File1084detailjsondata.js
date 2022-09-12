console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java 19 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.TopicCreationConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.TopicCreationConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#67"
 , "c1" : "void"
 , "c2" : "validatePartitions(String;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#74"
 , "c1" : "void"
 , "c2" : "validateReplicationFactor(String;short)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#81"
 , "c1" : "ConfigDef"
 , "c2" : "configDef(String;short;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#104"
 , "c1" : "ConfigDef"
 , "c2" : "defaultGroupConfigDef()"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class TopicCreationConfig contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method validatePartitions arguments String  configName|int  factor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.runtime.TopicCreationConfig.validatePartitions@POLYN162380 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.connect.runtime.TopicCreationConfig.validatePartitions@POLYN162380 the MagicNumber/String  'Number of partitions must be positive, or -1 to use the broker's default' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method validateReplicationFactor arguments String  configName|short  factor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.runtime.TopicCreationConfig.validateReplicationFactor@POLYN162718 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.runtime.TopicCreationConfig.validateReplicationFactor@POLYN162718 the MagicNumber/String  'Replication factor must be positive and not larger than the number of brokers in the Kafka cluster, or -1 to use the broker's default' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method configDef arguments String  group|short  defaultReplicationFactor|int  defaultParitionCount"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.connect.runtime.TopicCreationConfig.configDef@POLYN163064 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.connect.runtime.TopicCreationConfig.configDef@POLYN163064 the MagicNumber/String  'Inclusion Topic Pattern for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.runtime.TopicCreationConfig.configDef@POLYN163064 the MagicNumber/String  'Exclusion Topic Pattern for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.runtime.TopicCreationConfig.configDef@POLYN163064 the MagicNumber/String  'Replication Factor for Topics in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.runtime.TopicCreationConfig.configDef@POLYN163064 the MagicNumber/String  'Partition Count for Topics in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.runtime.TopicCreationConfig.defaultGroupConfigDef@POLYN164702 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.connect.runtime.TopicCreationConfig.defaultGroupConfigDef@POLYN164702 the MagicNumber/String  '.*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.connect.runtime.TopicCreationConfig.defaultGroupConfigDef@POLYN164702 the MagicNumber/String  'Inclusion Topic Pattern for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.connect.runtime.TopicCreationConfig.defaultGroupConfigDef@POLYN164702 the MagicNumber/String  'Exclusion Topic Pattern for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.runtime.TopicCreationConfig.defaultGroupConfigDef@POLYN164702 the MagicNumber/String  'Replication Factor for Topics in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/TopicCreationConfig.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.runtime.TopicCreationConfig.defaultGroupConfigDef@POLYN164702 the MagicNumber/String  'Partition Count for Topics in ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
