console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java 45 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.WorkerMetricsGroup"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.WorkerMetricsGroup" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WorkerMetricsGroup"
 , "c2" : "WorkerMetricsGroup(Map<String,WorkerConnector>;Map<ConnectorTaskId,WorkerTask>;ConnectMetrics)"
 , "c3" : "1"
 , "c4" : "26"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordConnectorStartupFailure()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordConnectorStartupSuccess()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordTaskFailure()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordTaskSuccess()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ConnectMetrics.MetricGroup"
 , "c2" : "metricGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorStatus.Listener"
 , "c2" : "wrapStatusListener(ConnectorStatus.Listener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskStatus.Listener"
 , "c2" : "wrapStatusListener(TaskStatus.Listener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.svg" }

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
]
,
"data12b" : [
]
,
"data12c" : [
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class WorkerMetricsGroup contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument connectors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument tasks is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument connectMetrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'connector-startup-results' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'connector-startup-attempts' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'connector-startup-successes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'connector-startup-failures' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'task-startup-results' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'task-startup-attempts' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'task-startup-successes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.WorkerMetricsGroup@POLYN184369 the MagicNumber/String  'task-startup-failures' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordConnectorStartupFailure@POLYN187658 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordConnectorStartupFailure@POLYN187658 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordConnectorStartupFailure@POLYN187658 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordConnectorStartupSuccess@POLYN187913 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordConnectorStartupSuccess@POLYN187913 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordConnectorStartupSuccess@POLYN187913 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordTaskFailure@POLYN188168 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordTaskFailure@POLYN188168 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordTaskFailure@POLYN188168 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordTaskSuccess@POLYN188423 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordTaskSuccess@POLYN188423 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.recordTaskSuccess@POLYN188423 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method wrapStatusListener arguments ConnectorStatus.Listener  delegateListener"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method wrapStatusListener arguments TaskStatus.Listener  delegateListener"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00101] The class ConnectorStatusListener contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method onStartup arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.ConnectorStatusListener.onStartup@POLYN189407 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method onPause arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method onResume arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method onFailure arguments String  connector|Throwable  cause"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method onRestart arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method onShutdown arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method onDeletion arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00150] The class TaskStatusListener contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method onStartup arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.connect.runtime.WorkerMetricsGroup.TaskStatusListener.onStartup@POLYN191021 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#166"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00166] For method onPause arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method onResume arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method onFailure arguments ConnectorTaskId  id|Throwable  cause"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method onRestart arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#189"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00189] For method onShutdown arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method onDeletion arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerMetricsGroup.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerMetricsGroup.close@POLYN187570"
}} 
]
};
console.log('leListeStr 99 main end');
