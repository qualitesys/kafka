console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java 11 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.QuickUnion"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.QuickUnion" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#26"
 , "c1" : "void"
 , "c2" : "add(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#30"
 , "c1" : "boolean"
 , "c2" : "exists(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#37"
 , "c1" : "T"
 , "c2" : "root(T)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#57"
 , "c1" : "void"
 , "c2" : "unite(T;T...)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#63"
 , "c1" : "void"
 , "c2" : "unitePair(T;T)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.svg" }

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
 , "c1" : "./QcrReportFile01File1904Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1904&numSeq=1"
 , "c2" : "1"
 , "c3" : "3"
 , "c4" : "2"
 , "c5" : ["java.util.HashMap.get@POLYN617768.return" , "java.util.HashMap.put@POLYN621128.key"]
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
 , "c1" : "3"
 , "sourcenoligne" : "[00039]"
 , "c3" : ["java.util.HashMap.get@POLYN617768.return" , "---java.util.HashMap.get@POLYN617768" , "org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636.parent"]
 , "c4" : "//QC-JAVCWE099[00039] In org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636[00039] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00050]"
 , "c3" : ["org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636.parent" , "---dummymethode" , "org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636.current"]
 , "c4" : ""
 , "c5" : "none"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00048]"
 , "c3" : ["org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636.current" , "---java.util.HashMap.put@POLYN621128" , "java.util.HashMap.put@POLYN621128.key"]
 , "c4" : "//QC-JAVCWE099[00048] In org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636[00048] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method add arguments T  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method exists arguments T  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method root arguments T  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00037] For method root list of called methods Object monObjet|V ids_getN147791|V ids_getN148178"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147636 the MagicNumber/String  'id: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method unite arguments T  id1|T  ...idList"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method unitePair arguments T  id1|T  id2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method unitePair list of called methods Object monObjet|T rootN148910|T rootN149001"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
