console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java 37 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.fault.Kibosh"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.Kibosh" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00168"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#168"
 , "c1" : "Kibosh"
 , "c2" : "Kibosh()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00174"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#174"
 , "c1" : "KiboshProcess"
 , "c2" : "findProcessObject(String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00187"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#187"
 , "c1" : "void"
 , "c2" : "addFault(String;KiboshFaultSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#195"
 , "c1" : "void"
 , "c2" : "removeFault(String;KiboshFaultSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.svg" }

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
 , "c1" : "./QcrReportFile01File2199Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=2199&numSeq=1"
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
 , "sourcenoligne" : "[00176]"
 , "c3" : ["java.util.HashMap.get@POLYN617315.return" , "---java.util.HashMap.get@POLYN617315" , "org.apache.kafka.trogdor.fault.Kibosh.findProcessObject@POLYN171677.process"]
 , "c4" : "//QC-JAVCWE099[00176] In org.apache.kafka.trogdor.fault.Kibosh.findProcessObject@POLYN171677[00176] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00179]"
 , "c3" : ["org.apache.kafka.trogdor.fault.Kibosh.findProcessObject@POLYN171677.process" , "---java.util.HashMap.put@POLYN620675" , "java.util.HashMap.put@POLYN620675.value"]
 , "c4" : "//QC-JAVCWE099[00179] In org.apache.kafka.trogdor.fault.Kibosh.findProcessObject@POLYN171677[00179] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "5"
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
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00051] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN166186 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN166186 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN166186 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.KiboshProcess@POLYN167652 the MagicNumber/String  'Can't find file ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#98"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00098] Lock statement on synchronized method addFault"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method addFault arguments KiboshFaultSpec  toAdd"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#105"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00105] Lock statement on synchronized method removeFault"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method removeFault arguments KiboshFaultSpec  toRemove"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168528 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168528 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168528 the MagicNumber/String  'Failed to find fault ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168528 the MagicNumber/String  '. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method read arguments Path  controlPath"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.KiboshControlFile@POLYN170037 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method write arguments Path  controlPath"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00151] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN170688 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN170688 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN170688 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00129] Public method read is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00149] Public method equals is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00156] Public method hashCode is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00161] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00144] Public method write is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#174"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00174] Lock statement on synchronized method findProcessObject"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method findProcessObject arguments String  mountPath"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00174] For method findProcessObject list of called methods Object monObjet|V processes_getN171908"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.trogdor.fault.Kibosh.findProcessObject@POLYN171677 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method addFault arguments String  mountPath|KiboshFaultSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00187] For method addFault list of called methods Object monObjet|org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess findProcessObjectN172429"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method removeFault arguments String  mountPath|KiboshFaultSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00195] For method removeFault list of called methods Object monObjet|org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess findProcessObjectN172716"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.Kibosh.addFault@POLYN172299"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.Kibosh.removeFault@POLYN172586"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
