console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java 71 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00146"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#146"
 , "c1" : "IntGaugeSuite"
 , "c2" : "IntGaugeSuite(Logger;String;Metrics;Function<K,MetricName>;int)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00165"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#165"
 , "c1" : "void"
 , "c2" : "increment(K)"
 , "c3" : "6"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00210"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#210"
 , "c1" : "void"
 , "c2" : "performPendingMetricsOperations()"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00235"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#235"
 , "c1" : "void"
 , "c2" : "decrement(K)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00256"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#256"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00275"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#275"
 , "c1" : "int"
 , "c2" : "maxEntries()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00280"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#280"
 , "c1" : "Metrics"
 , "c2" : "metrics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00288"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#288"
 , "c1" : "Map<K,Integer>"
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
"data09a" : [
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File469Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=469&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.get@POLYN617315.return" , "java.util.HashMap.put@POLYN620675.value"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ko"
 , "secu2" : "Ok"
 , "secu3" : "Ko"
 , "secu4" : "Ko"
}}
]
,
"data09b" : [
{ "sequence" : { 
 "seq" : "1" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00172]"
 , "c3" : ["java.util.HashMap.get@POLYN617315.return" , "---java.util.HashMap.get@POLYN617315" , "org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968.gauge"]
 , "c4" : "//QC-JAVCWE099[00172] In org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968[00172] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00197]"
 , "c3" : ["org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968.gauge" , "---java.util.HashMap.put@POLYN620675" , "java.util.HashMap.put@POLYN620675.value"]
 , "c4" : "//QC-JAVCWE099[00197] In org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968[00197] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ko"
}}
,
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c3" : ""
 , "c4" : "Security risk level : CRITICAL"
}}
]
}}
]
, 
"data10" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.common.metrics.internals.IntGaugeSuite.this" }
,
{ "ligne" :  "R1:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656.key" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R0 in line [00235],R1 in line [00235])" }
,
{ "ligne" : "S0:java.util.HashMap.get@POLYN617315" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R0 in line [00235],R1 in line [00235])" }
,
{ "ligne" : "S1:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R0 in line [00235],R1 in line [00235])" }
,
{ "ligne" : "S1:java.util.HashMap.get@POLYN617315" }
 ]
 } }
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "21"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.StoredIntGauge.StoredIntGauge@POLYN181196 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#129"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00129] Lock statement on synchronized method value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method value arguments MetricConfig  config|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#133"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00133] Lock statement on synchronized method increment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#137"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00137] Lock statement on synchronized method decrement"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#141"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00141] Lock statement on synchronized method value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#146"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00146] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN181882 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN181882 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN181882 the MagicNumber/String  '{}: created new gauge suite with maxEntries = {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method increment arguments K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00165] For method increment list of called methods Object monObjet|V gauges_getN183307|V gauges_getN184217"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#166"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00166] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String  '{}: Attempted to increment {}, but the GaugeSuite was closed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String  '{}: Attempted to increment {}, but there are already {} entries.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String  '{}: Removing the metric {}, which has a value of 0.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String  '{}: Adding a new metric {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String  '{}: entering performPendingMetricsOperations' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String  '{}: removing metric {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String  '{}: adding metric {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String  '{}: leaving performPendingMetricsOperations' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#235"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00235] Lock statement on synchronized method decrement"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#235"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00235] For method decrement arguments K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#235"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00235] For method decrement list of called methods Object monObjet|V gauges_getN186952|int gauge_decrementN187275"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#235"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00235] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String  '{}: Attempted to decrement {}, but the gauge suite was closed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String  '{}: Attempted to decrement {}, but no such metric was registered.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String  '{}: Removed a reference to {}.  {} reference(s) remaining.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#256"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00256] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#256"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00256] For method close list of called methods Object monObjet|java.util.Collection gauges_valuesN188048"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN187648 the MagicNumber/String  '{}: gauge suite is already closed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN187648 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN187648 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN187648 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN187648 the MagicNumber/String  '{}: closed {} metric(s).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#288"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00288] Lock statement on synchronized method values"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656.key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN181882"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String '{}: Attempted to increment {}, but the GaugeSuite was closed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#175"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00175] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00182] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String '{}: Attempted to increment {}, but there are already {} entries.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00191] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String '{}: Removing the metric {}, which has a value of 0.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00199] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 the MagicNumber/String '{}: Adding a new metric {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00213] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String '{}: entering performPendingMetricsOperations' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00215] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00217] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#219"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00219] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String '{}: removing metric {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#224"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00224] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String '{}: adding metric {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00229] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374 the MagicNumber/String '{}: leaving performPendingMetricsOperations' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String '{}: Attempted to decrement {}, but the gauge suite was closed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#242"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00242] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#243"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00243] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String '{}: Attempted to decrement {}, but no such metric was registered.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#247"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00247] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String '{}: Removed a reference to {}.  {} reference-s- remaining.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN181882 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN181882 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.common.metrics.internals.IntGaugeSuite.IntGaugeSuite@POLYN181882 the MagicNumber/String '{}: created new gauge suite with maxEntries = {}.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/internals/IntGaugeSuite.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
