console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java 28 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.connect.runtime.WorkerConfigTransformer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.WorkerConfigTransformer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#46"
 , "c1" : "WorkerConfigTransformer"
 , "c2" : "WorkerConfigTransformer(Worker;Map<String,ConfigProvider>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#52"
 , "c1" : "Map<String,String>"
 , "c2" : "transform(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#56"
 , "c1" : "Map<String,String>"
 , "c2" : "transform(String;Map<String,String>)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#74"
 , "c1" : "void"
 , "c2" : "scheduleReload(String;Map<String,Long>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#80"
 , "c1" : "void"
 , "c2" : "scheduleReload(String;String;long)"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#103"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.svg" }

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
 , "c1" : "./QcrReportFile01File1090Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1090&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.get@POLYN617768.return" , "java.util.HashMap.put@POLYN621128.value"]
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
 , "sourcenoligne" : "[00081]"
 , "c3" : ["java.util.HashMap.get@POLYN617768.return" , "---java.util.HashMap.get@POLYN617768" , "org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192.connectorRequests"]
 , "c4" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192[00081] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00084]"
 , "c3" : ["org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192.connectorRequests" , "---java.util.HashMap.put@POLYN621128" , "java.util.HashMap.put@POLYN621128.value"]
 , "c4" : "//QC-JAVCWE099[00084] In org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192[00084] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
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
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
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
 , "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method transform arguments Map&lt;String ,String &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method transform arguments String  connectorName|Map&lt;String ,String &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method scheduleReload arguments String  connectorName|Map&lt;String ,Long &gt;  ttls"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument ttls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method scheduleReload arguments String  connectorName|String  path|long  ttl"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00080] For method scheduleReload list of called methods Object monObjet|V connectorRequests_getN160734|org.apache.kafka.connect.runtime.Herder worker_herderN161356"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String  'Scheduling a restart of connector {} in {} ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String  'Unexpected error during connector restart: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.close@POLYN161591 the MagicNumber/String  'config provider' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158592 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String 'Scheduling a restart of connector {} in {} ms' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN160192 the MagicNumber/String 'Unexpected error during connector restart: ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
