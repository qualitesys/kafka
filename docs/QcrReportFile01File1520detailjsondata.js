console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java 29 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Reconfigurable"
 , "c2" : "org.apache.kafka.server.metrics.KafkaYammerMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.metrics.KafkaYammerMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#51"
 , "c1" : "MetricsRegistry"
 , "c2" : "defaultRegistry()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#59"
 , "c1" : "KafkaYammerMetrics"
 , "c2" : "KafkaYammerMetrics()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#65"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#70"
 , "c1" : "Set<String>"
 , "c2" : "reconfigurableConfigs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#75"
 , "c1" : "void"
 , "c2" : "validateReconfiguration(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#80"
 , "c1" : "void"
 , "c2" : "reconfigure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#85"
 , "c1" : "MetricName"
 , "c2" : "getMetricName(String;String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#98"
 , "c1" : "MetricName"
 , "c2" : "getMetricName(String;String;String;LinkedHashMap<String,String>)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00121"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#121"
 , "c1" : "Optional<String>"
 , "c2" : "toMBeanName(LinkedHashMap<String,String>)"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00156"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#156"
 , "c1" : "Optional<String>"
 , "c2" : "toScope(Map<String,String>)"
 , "c3" : "6"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.KafkaYammerMetrics@POLYN167192 the MagicNumber/String  'kafka-jmx-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method validateReconfiguration arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method reconfigure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method getMetricName arguments String  group|String  typeName|String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.getMetricName@POLYN168275 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method getMetricName arguments String  group|String  typeName|String  name|LinkedHashMap&lt;String ,String &gt;  tags"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument name is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.getMetricName@POLYN168537 the MagicNumber/String  ':type=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.getMetricName@POLYN168537 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.getMetricName@POLYN168537 the MagicNumber/String  ',name=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.getMetricName@POLYN168537 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method toMBeanName arguments LinkedHashMap&lt;String ,String &gt;  tags"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toMBeanName@POLYN169775 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toMBeanName@POLYN169775 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toMBeanName@POLYN169775 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#143"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00143] The argument tags is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument mapSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.server.metrics.KafkaYammerMetrics the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#156"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00156] For method toScope arguments Map&lt;String ,String &gt;  tags"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00169] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toScope@POLYN171879 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toScope@POLYN171879 the MagicNumber/String  '\\.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toScope@POLYN171879 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toScope@POLYN171879 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.server.metrics.KafkaYammerMetrics.toScope@POLYN171879 the MagicNumber/String  '.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/KafkaYammerMetrics.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
