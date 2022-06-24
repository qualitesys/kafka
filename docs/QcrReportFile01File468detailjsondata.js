console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java 44 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "IntGaugeSuite"
 , "c2" : "IntGaugeSuite(Logger;String;Metrics;Function<K,MetricName>;int)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "increment(K)"
 , "c3" : "6"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "performPendingMetricsOperations()"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "decrement(K)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "maxEntries()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Metrics"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<K,Integer>"
 , "c2" : "values()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class IntGaugeSuite contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00054] The class PendingMetricsChange contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00068] The class StoredIntGauge contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.StoredIntGauge.StoredIntGauge@POLYN194762 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#79"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00079] Lock statement on synchronized method value"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method value arguments MetricConfig  config|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#83"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00083] Lock statement on synchronized method increment"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#87"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00087] Lock statement on synchronized method decrement"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#91"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00091] Lock statement on synchronized method value"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN195448 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN195448 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN195448 the MagicNumber/String  '{}: created new gauge suite with maxEntries = {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method increment arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#115"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00115] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#116"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00116] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN196534 the MagicNumber/String  '{}: Attempted to increment {}, but the GaugeSuite was closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN196534 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN196534 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN196534 the MagicNumber/String  '{}: Attempted to increment {}, but there are already {} entries.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN196534 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN196534 the MagicNumber/String  '{}: Removing the metric {}, which has a value of 0.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN196534 the MagicNumber/String  '{}: Adding a new metric {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN198940 the MagicNumber/String  '{}: entering performPendingMetricsOperations' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN198940 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN198940 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN198940 the MagicNumber/String  '{}: removing metric {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN198940 the MagicNumber/String  '{}: adding metric {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN198940 the MagicNumber/String  '{}: leaving performPendingMetricsOperations' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#181"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00181] Lock statement on synchronized method decrement"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method decrement arguments K  key"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#181"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00181] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN200222 the MagicNumber/String  '{}: Attempted to decrement {}, but the gauge suite was closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN200222 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN200222 the MagicNumber/String  '{}: Attempted to decrement {}, but no such metric was registered.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN200222 the MagicNumber/String  '{}: Removed a reference to {}.  {} reference(s) remaining.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN200222 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#202"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00202] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN201214 the MagicNumber/String  '{}: gauge suite is already closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN201214 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN201214 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN201214 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN201214 the MagicNumber/String  '{}: closed {} metric(s).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#229"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00229] Lock statement on synchronized method values"
}} 
]
};
console.log('leListeStr 99 main end');
