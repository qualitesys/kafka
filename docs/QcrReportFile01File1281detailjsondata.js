console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java 38 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.jmh.metadata.MetadataRequestBenchmark"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.jmh.metadata.MetadataRequestBenchmark" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "setup()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "initializeMetadataCache()"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "List<UpdateMetadataEndpoint>"
 , "c2" : "endpoints(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaApis"
 , "c2" : "createKafkaApis()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "tearDown()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RequestChannel.Request"
 , "c2" : "buildAllTopicMetadataRequest()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "testMetadataRequestForAllTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "testRequestToJson()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "testTopicIdInfo()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.png" 

 , "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
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
 , "c4" : "33"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00081] The class MetadataRequestBenchmark contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00113] For method setup list of called methods Object monObjet|KafkaApis createKafkaApisN189078|RequestChannel.Request buildAllTopicMetadataRequestN189144"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  'rack1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  'topic-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.initializeMetadataCache@POLYN189181 the MagicNumber/String  100 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method endpoints arguments int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.endpoints@POLYN191224 the MagicNumber/String  'host_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.endpoints@POLYN191224 the MagicNumber/String  9092 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.createKafkaApis@POLYN191658 the MagicNumber/String  'zk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.createKafkaApis@POLYN191658 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.createKafkaApis@POLYN191658 the MagicNumber/String  'clusterId' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.createKafkaApis@POLYN191658 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00194] For method buildAllTopicMetadataRequest list of called methods Object monObjet|java.nio.ByteBuffer metadataRequest_serializeN193807"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.buildAllTopicMetadataRequest@POLYN193426 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.buildAllTopicMetadataRequest@POLYN193426 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.buildAllTopicMetadataRequest@POLYN193426 the MagicNumber/String  '1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.buildAllTopicMetadataRequest@POLYN193426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.buildAllTopicMetadataRequest@POLYN193426 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.buildAllTopicMetadataRequest@POLYN193426 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.jmh.metadata.MetadataRequestBenchmark.buildAllTopicMetadataRequest@POLYN193426 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/metadata/MetadataRequestBenchmark.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00216] Public method testTopicIdInfo is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
