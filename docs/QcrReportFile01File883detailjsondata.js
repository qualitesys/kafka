console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java 49 rule violations " 
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
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#52"
 , "c1" : "String"
 , "c2" : "getVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#56"
 , "c1" : "String"
 , "c2" : "getCommitId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#60"
 , "c1" : "void"
 , "c2" : "registerAppInfo(String;String;Metrics;long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#72"
 , "c1" : "void"
 , "c2" : "unregisterAppInfo(String;String;Metrics)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#87"
 , "c1" : "MetricName"
 , "c2" : "metricName(Metrics;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#91"
 , "c1" : "void"
 , "c2" : "registerMetrics(Metrics;AppInfo)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#99"
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
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.svg" }

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
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.common.utils.AppInfoParser.this" }
,
{ "ligne" :  "R1:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.prefix" }
,
{ "ligne" :  "R2:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.id" }
,
{ "ligne" :  "R3:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.metrics" }
,
{ "ligne" :  "R4:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.nowMs" }
,
{ "ligne" :  "R5:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.prefix" }
,
{ "ligne" :  "R6:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.id" }
,
{ "ligne" :  "R7:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.metrics" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519 (R0 in line [00060],R1 in line [00060],R2 in line [00060],R3 in line [00060],R4 in line [00060])" }
,
{ "ligne" : "S0:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.dummymethode_00062" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 (R0 in line [00072],R5 in line [00072],R6 in line [00072],R7 in line [00072])" }
,
{ "ligne" : "S1:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.dummymethode_00075" }
 ]
 } }
,
{ "sequence" : { "noseq" : "2" , "pas" : [
{ "ligne" : "S2:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519 (R0 in line [00060],R1 in line [00060],R2 in line [00060],R3 in line [00060],R4 in line [00060])" }
,
{ "ligne" : "S2:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519 (R0 in line [00060],R1 in line [00060],R2 in line [00060],R3 in line [00060],R4 in line [00060])" }
,
{ "ligne" : "S2:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.dummymethode_00062" }
 ]
 } }
,
{ "sequence" : { "noseq" : "3" , "pas" : [
{ "ligne" : "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 (R0 in line [00072],R5 in line [00072],R6 in line [00072],R7 in line [00072])" }
,
{ "ligne" : "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 (R0 in line [00072],R5 in line [00072],R6 in line [00072],R7 in line [00072])" }
,
{ "ligne" : "S3:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.dummymethode_00075" }
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
 , "c4" : "8"
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
 , "c4" : "8"
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
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#60"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00060] Lock statement on synchronized method registerAppInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method registerAppInfo arguments String  prefix|String  id|Metrics  metrics|long  nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519 the MagicNumber/String  ':type=app-info,id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519 the MagicNumber/String  'Error registering AppInfo mbean' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#72"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00072] Lock statement on synchronized method unregisterAppInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method unregisterAppInfo arguments String  prefix|String  id|Metrics  metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 the MagicNumber/String  ':type=app-info,id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 the MagicNumber/String  'Error unregistering AppInfo mbean' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 the MagicNumber/String  'App info {} for {} unregistered' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method metricName arguments Metrics  metrics|String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.utils.AppInfoParser.metricName@POLYN172186 the MagicNumber/String  'app-info' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.utils.AppInfoParser.metricName@POLYN172186 the MagicNumber/String  'Metric indicating ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method registerMetrics arguments Metrics  metrics|AppInfo  appInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument appInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN172425 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN172425 the MagicNumber/String  'version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN172425 the MagicNumber/String  'commit-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN172425 the MagicNumber/String  'start-time-ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method unregisterMetrics arguments Metrics  metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN173242 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN173242 the MagicNumber/String  'version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN173242 the MagicNumber/String  'commit-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN173242 the MagicNumber/String  'start-time-ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN174008 the MagicNumber/String  'Kafka version: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN174008 the MagicNumber/String  'Kafka commitId: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN174008 the MagicNumber/String  'Kafka startTimeMs: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method value arguments MetricConfig  config|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00060] Public method registerAppInfo is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00072] Public method unregisterAppInfo is dealing with none of the public properties of the class. Risk of useless strong coupling"
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
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.prefix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519.nowMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R5 : org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.prefix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R6 : org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R7 : org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303.metrics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN174008"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN174008 the MagicNumber/String 'Kafka version: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN174008 the MagicNumber/String 'Kafka commitId: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.common.utils.AppInfoParser.AppInfo.AppInfo@POLYN174008 the MagicNumber/String 'Kafka startTimeMs: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519 the MagicNumber/String ':type=app-info,id=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170519 the MagicNumber/String 'Error registering AppInfo mbean' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 the MagicNumber/String ':type=app-info,id=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 the MagicNumber/String 'Error unregistering AppInfo mbean' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171303 the MagicNumber/String 'App info {} for {} unregistered' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/AppInfoParser.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
