console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java 24 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ControllerPurgatory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ControllerPurgatory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#44"
 , "c1" : "void"
 , "c2" : "completeUpTo(long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#63"
 , "c1" : "void"
 , "c2" : "failAll(Exception)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#80"
 , "c1" : "void"
 , "c2" : "add(long;DeferredEvent)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#101"
 , "c1" : "OptionalLong"
 , "c2" : "highestPendingOffset()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.svg" }

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
 , "c1" : "./QcrReportFile01File1309Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1309&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.get@POLYN618616.return" , "java.util.HashMap.put@POLYN621976.value"]
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
 , "sourcenoligne" : "[00089]"
 , "c3" : ["java.util.HashMap.get@POLYN618616.return" , "---java.util.HashMap.get@POLYN618616" , "org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845.events"]
 , "c4" : "//QC-JAVCWE099[00089] In org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845[00089] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00092]"
 , "c3" : ["org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845.events" , "---java.util.HashMap.put@POLYN621976" , "java.util.HashMap.put@POLYN621976.value"]
 , "c4" : "//QC-JAVCWE099[00092] In org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845[00092] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c4" : "7"
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
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method completeUpTo arguments long  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00044] For method completeUpTo list of called methods Object monObjet|java.util.Set pending_entrySetN156394"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.controller.ControllerPurgatory.completeUpTo@POLYN156222 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method failAll arguments Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method failAll list of called methods Object monObjet|java.util.Set pending_entrySetN157247"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method add arguments long  offset|DeferredEvent  event"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00080] For method add list of called methods Object monObjet|V pending_getN158427"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  'There is already a purgatory event with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  'offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  '.  We should not add one with an offset of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  ' which ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  'is lower than that.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String 'There is already a purgatory event with ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String '.  We should not add one with an offset of ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String 'offset ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String ' which ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String 'is lower than that.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.apache.kafka.controller.ControllerPurgatory.add@POLYN157845 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ControllerPurgatory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
