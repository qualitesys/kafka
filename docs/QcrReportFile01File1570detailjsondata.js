console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java 22 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.internals.metrics.ClientMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.internals.metrics.ClientMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "ClientMetrics"
 , "c2" : "ClientMetrics()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "commitId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "addVersionMetric(StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "addCommitIdMetric(StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "addApplicationIdMetric(StreamsMetricsImpl;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "addTopologyDescriptionMetric(StreamsMetricsImpl;Gauge<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "addStateMetric(StreamsMetricsImpl;Gauge<State>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "addNumAliveStreamThreadMetric(StreamsMetricsImpl;Gauge<Integer>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Sensor"
 , "c2" : "failedStreamThreadSensor(StreamsMetricsImpl)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "7"
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class ClientMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method addVersionMetric arguments StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method addCommitIdMetric arguments StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method addApplicationIdMetric arguments StreamsMetricsImpl  streamsMetrics|String  applicationId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method addTopologyDescriptionMetric arguments StreamsMetricsImpl  streamsMetrics|Gauge&lt;String &gt;  topologyDescription"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method addStateMetric arguments StreamsMetricsImpl  streamsMetrics|Gauge&lt;State &gt;  stateProvider"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method addNumAliveStreamThreadMetric arguments StreamsMetricsImpl  streamsMetrics|Gauge&lt;Integer &gt;  stateProvider"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method failedStreamThreadSensor arguments StreamsMetricsImpl  streamsMetrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00120] For method failedStreamThreadSensor list of called methods Object monObjet|org.apache.kafka.common.metrics.Sensor streamsMetrics_clientLevelSensorN160063"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#120"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00120] The argument streamsMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.streams.internals.metrics.ClientMetrics.failedStreamThreadSensor@POLYN159958 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00120] Public method failedStreamThreadSensor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method addApplicationIdMetric is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00090] Public method addTopologyDescriptionMetric is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00100] Public method addStateMetric is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/metrics/ClientMetrics.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00110] Public method addNumAliveStreamThreadMetric is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
