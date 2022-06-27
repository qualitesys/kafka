console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java 77 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "MetricsReporter"
 , "c2" : "org.apache.kafka.common.metrics.JmxReporter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.metrics.JmxReporter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "JmxReporter"
 , "c2" : "JmxReporter()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "JmxReporter"
 , "c2" : "JmxReporter(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "reconfigurableConfigs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "validateReconfiguration(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reconfigure(Map<String,?>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(List<KafkaMetric>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "containsMbean(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "metricChange(KafkaMetric)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "metricRemoval(KafkaMetric)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KafkaMbean"
 , "c2" : "removeAttribute(KafkaMetric;String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "addAttribute(KafkaMetric)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getMBeanName(String;MetricName)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "unregister(KafkaMbean)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reregister(KafkaMbean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Predicate<String>"
 , "c2" : "compilePredicate(Map<String,?>)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "contextChange(MetricsContext)"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
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
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "21"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00034] The class JmxReporter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.metrics.JmxReporter.JmxReporter@POLYN207902 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.metrics.JmxReporter.JmxReporter@POLYN208213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.metrics.JmxReporter.JmxReporter@POLYN208213 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method validateReconfiguration arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method reconfigure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00085] For method reconfigure list of called methods Object monObjet|java.util.function.Predicate&lt;String&gt; JmxReporter_compilePredicateN209116"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#86"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00086] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method init arguments List&lt;KafkaMetric &gt;  metrics"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#101"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00101] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method containsMbean arguments String  mbeanName"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method metricChange arguments KafkaMetric  metric"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00118] For method metricChange list of called methods Object monObjet|String addAttributeN210348"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#119"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00119] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.metrics.JmxReporter.metricChange@POLYN210210 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method metricRemoval arguments KafkaMetric  metric"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00128] For method metricRemoval list of called methods Object monObjet|org.apache.kafka.common.MetricName metric_metricNameN210798|String getMBeanNameN210873|org.apache.kafka.common.metrics.JmxReporter.KafkaMbean removeAttributeN210981"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#128"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00128] The argument metric is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#129"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00129] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.metrics.JmxReporter.metricRemoval@POLYN210660 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method removeAttribute arguments KafkaMetric  metric|String  mBeanName"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00143] For method removeAttribute list of called methods Object monObjet|org.apache.kafka.common.MetricName metric_metricNameN211615"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#143"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00143] The argument metric is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.common.metrics.JmxReporter.removeAttribute@POLYN211493 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method addAttribute arguments KafkaMetric  metric"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00151] The argument metric is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.common.metrics.JmxReporter.addAttribute@POLYN211954 the MagicNumber/String  'Error creating mbean attribute for metricName :' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method getMBeanName arguments String  prefix|MetricName  metricName"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#166"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00166] The argument metricName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.metrics.JmxReporter.getMBeanName@POLYN212994 the MagicNumber/String  ':type=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.metrics.JmxReporter.getMBeanName@POLYN212994 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.metrics.JmxReporter.getMBeanName@POLYN212994 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.common.metrics.JmxReporter.getMBeanName@POLYN212994 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.metrics.JmxReporter.getMBeanName@POLYN212994 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#183"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00183] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#189"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00189] For method unregister arguments KafkaMbean  mbean"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#189"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00189] The argument mbean is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.common.metrics.JmxReporter.unregister@POLYN214416 the MagicNumber/String  'Error unregistering mbean' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#199"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00199] For method reregister arguments KafkaMbean  mbean"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#199"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00199] The argument mbean is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.common.metrics.JmxReporter.reregister@POLYN214901 the MagicNumber/String  'Error registering mbean ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00208] The class KafkaMbean contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method setAttribute arguments String  name|KafkaMetric  metric"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method getAttribute arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getAttribute@POLYN216099 the MagicNumber/String  'Could not find attribute ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method getAttributes arguments String[]  names"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00239] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getAttributes@POLYN216481 the MagicNumber/String  'Error getting JMX attribute '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#246"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00246] For method removeAttribute arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00256] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.getMBeanInfo@POLYN217259 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00269] For method invoke arguments String  name|Object[]  params|String[]  sig"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.invoke@POLYN218388 the MagicNumber/String  'Set not allowed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method setAttribute arguments Attribute  attribute"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.setAttribute@POLYN218604 the MagicNumber/String  'Set not allowed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#279"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00279] For method setAttributes arguments AttributeList  list"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.common.metrics.JmxReporter.KafkaMbean.setAttributes@POLYN218762 the MagicNumber/String  'Set not allowed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method compilePredicate arguments Map&lt;String ,? &gt;  originalConfig"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.common.metrics.JmxReporter.compilePredicate@POLYN218939 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.common.metrics.JmxReporter.compilePredicate@POLYN218939 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.common.metrics.JmxReporter.compilePredicate@POLYN218939 the MagicNumber/String  'JMX filter for configuration' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.common.metrics.JmxReporter.compilePredicate@POLYN218939 the MagicNumber/String  '.(include/exclude) is not a valid regular expression' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#313"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00313] For method contextChange arguments MetricsContext  metricsContext"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#313"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00313] For method contextChange list of called methods Object monObjet|java.util.Map&lt;String,String&gt; metricsContext_contextLabelsN220516"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#313"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00313] The argument metricsContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#316"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00316] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/JmxReporter.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.apache.kafka.common.metrics.JmxReporter.contextChange@POLYN220423 the MagicNumber/String  'JMX MetricsContext can only be updated before JMX metrics are created' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
