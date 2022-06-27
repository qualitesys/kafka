console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/MetadataShell.java 68 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.shell.MetadataShell"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.MetadataShell" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MetadataShell"
 , "c2" : "MetadataShell(KafkaRaftManager<ApiMessageAndVersion>;SnapshotFileReader;MetadataNodeManager)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run(List<String>)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "20"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "waitUntilCaughtUp()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "22"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00029] The class MetadataShell contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class Builder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method setSnapshotPath arguments String  snapshotPath"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  'You must supply the log path via --snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  'Initialization error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.shell.MetadataShell.Builder.build@POLYN181360 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method run arguments List&lt;String &gt;  args"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.shell.MetadataShell.run@POLYN182938 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.shell.MetadataShell.run@POLYN182938 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.shell.MetadataShell.run@POLYN182938 the MagicNumber/String  'Expected either a raft manager or snapshot reader' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.shell.MetadataShell.run@POLYN182938 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.shell.MetadataShell.run@POLYN182938 the MagicNumber/String  'Loading...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.shell.MetadataShell.run@POLYN182938 the MagicNumber/String  'Starting...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.shell.MetadataShell.run@POLYN182938 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.shell.MetadataShell.close@POLYN184689 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.shell.MetadataShell.close@POLYN184689 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'metadata-tool' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'The Apache Kafka metadata tool' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  '--snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  '-s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'The snapshot file to read.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'command' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'The command to run.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'snapshot' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'MetadataShell' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'agent-shutdown-hook' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'Removing temporary directory ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'Got exception while removing temporary directory ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'command' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'Error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  'Unexpected error: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00118] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.shell.MetadataShell.main@POLYN185055"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'metadata-tool' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'The Apache Kafka metadata tool' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String '--snapshot' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String '-s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'The snapshot file to read.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'command' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String '*' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'The command to run.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'snapshot' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'MetadataShell' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00134] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'agent-shutdown-hook' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'Removing temporary directory ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'Got exception while removing temporary directory ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'command' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00149] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'Error: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 'Unexpected error: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/MetadataShell.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method org.apache.kafka.shell.MetadataShell.main@POLYN185055 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
