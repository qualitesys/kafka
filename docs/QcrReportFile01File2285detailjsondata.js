console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java 4 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Message"
 , "c2" : "org.apache.kafka.trogdor.workload.TopicsSpec"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.workload.TopicsSpec" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#51"
 , "c1" : "TopicsSpec"
 , "c2" : "TopicsSpec()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#55"
 , "c1" : "TopicsSpec"
 , "c2" : "TopicsSpec(Map<String,PartitionsSpec>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#60"
 , "c1" : "Map<String,PartitionsSpec>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#65"
 , "c1" : "void"
 , "c2" : "set(String;PartitionsSpec)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#69"
 , "c1" : "TopicsSpec"
 , "c2" : "immutableCopy()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#80"
 , "c1" : "Map<String,PartitionsSpec>"
 , "c2" : "materialize()"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.svg" }

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
 , "c1" : "./QcrReportFile01File2285Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=2285&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.getValue@POLYN607725.return" , "java.util.HashMap.put@POLYN621976.value"]
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
 , "sourcenoligne" : "[00084]"
 , "c3" : ["java.util.HashMap.getValue@POLYN607725.return" , "---java.util.HashMap.getValue@POLYN607725" , "org.apache.kafka.trogdor.workload.TopicsSpec.materialize@POLYN154212.partitions"]
 , "c4" : "//QC-JAVCWE099[00084] In org.apache.kafka.trogdor.workload.TopicsSpec.materialize@POLYN154212[00084] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00086]"
 , "c3" : ["org.apache.kafka.trogdor.workload.TopicsSpec.materialize@POLYN154212.partitions" , "---java.util.HashMap.put@POLYN621976" , "java.util.HashMap.put@POLYN621976.value"]
 , "c4" : "//QC-JAVCWE099[00086] In org.apache.kafka.trogdor.workload.TopicsSpec.materialize@POLYN154212[00086] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method set arguments String  name|PartitionsSpec  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/workload/TopicsSpec.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
