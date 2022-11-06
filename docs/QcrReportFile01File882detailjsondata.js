console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java 50 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.AppInfoParser"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.AppInfoParser" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#37"
 , "c1" : "String"
 , "c2" : "getVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#41"
 , "c1" : "String"
 , "c2" : "getCommitId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#45"
 , "c1" : "void"
 , "c2" : "registerAppInfo(String;String;Metrics;long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#57"
 , "c1" : "void"
 , "c2" : "unregisterAppInfo(String;String;Metrics)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#72"
 , "c1" : "MetricName"
 , "c2" : "metricName(Metrics;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#76"
 , "c1" : "void"
 , "c2" : "registerMetrics(Metrics;AppInfo)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#84"
 , "c1" : "void"
 , "c2" : "unregisterMetrics(Metrics)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.svg" }

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
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.common.utils.AppInfoParser.this" }
,
{ "ligne" :  "R1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.prefix" }
,
{ "ligne" :  "R2:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.id" }
,
{ "ligne" :  "R3:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.metrics" }
,
{ "ligne" :  "R4:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.nowMs" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R0 in line [00045],R1 in line [00045],R2 in line [00045],R3 in line [00045],R4 in line [00045])" }
,
{ "ligne" : "S0:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R0 in line [00045],R1 in line [00045],R2 in line [00045],R3 in line [00045],R4 in line [00045])" }
,
{ "ligne" : "S1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 (R0 in line [00045],R1 in line [00045],R2 in line [00045],R3 in line [00045],R4 in line [00045])" }
,
{ "ligne" : "S1:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837" }
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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class AppInfoParser contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#45"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00045] Lock statement on synchronized method registerAppInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method registerAppInfo arguments String  prefix|String  id|Metrics  metrics|long  nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 the MagicNumber/String  ':type=app-info,id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 the MagicNumber/String  'Error registering AppInfo mbean' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#57"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00057] Lock statement on synchronized method unregisterAppInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method unregisterAppInfo arguments String  prefix|String  id|Metrics  metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161719 the MagicNumber/String  ':type=app-info,id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161719 the MagicNumber/String  'Error unregistering AppInfo mbean' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161719 the MagicNumber/String  'App info {} for {} unregistered' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method metricName arguments Metrics  metrics|String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.utils.AppInfoParser.metricName@POLYN162598 the MagicNumber/String  'app-info' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.utils.AppInfoParser.metricName@POLYN162598 the MagicNumber/String  'Metric indicating ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method registerMetrics arguments Metrics  metrics|AppInfo  appInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument appInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837 the MagicNumber/String  'version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837 the MagicNumber/String  'commit-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162837 the MagicNumber/String  'start-time-ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method unregisterMetrics arguments Metrics  metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String  'version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String  'commit-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String  'start-time-ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00098] The class AppInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN164420 the MagicNumber/String  'Kafka version: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN164420 the MagicNumber/String  'Kafka commitId: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN164420 the MagicNumber/String  'Kafka startTimeMs: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00126] The class ImmutableValue contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method value arguments MetricConfig  config|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00045] Public method registerAppInfo is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00057] Public method unregisterAppInfo is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.common.utils.AppInfoParser.this"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.prefix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939.nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161719"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String 'version' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String 'commit-id' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00088] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163654 the MagicNumber/String 'start-time-ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161719 the MagicNumber/String ':type=app-info,id=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161719 the MagicNumber/String 'Error unregistering AppInfo mbean' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161719 the MagicNumber/String 'App info {} for {} unregistered' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 the MagicNumber/String ':type=app-info,id=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00053] In the recursive method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN160939 the MagicNumber/String 'Error registering AppInfo mbean' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
