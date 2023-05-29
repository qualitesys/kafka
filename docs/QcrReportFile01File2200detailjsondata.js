console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java 35 rule violations " 
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
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "5"
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
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN175850 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN175850 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN175850 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.KiboshProcess@POLYN177318 the MagicNumber/String  'Can't find file ' should be converted to const"
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
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN178198 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN178198 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN178198 the MagicNumber/String  'Failed to find fault ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN178198 the MagicNumber/String  '. ' should be converted to const"
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
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.KiboshControlFile@POLYN179715 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN180366 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN180366 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN180366 the MagicNumber/String  false should be converted to const"
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
 , "c3" : "QC-JAV000007[00174] For method findProcessObject list of called methods Object monObjet|V processes_getN181590"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.trogdor.fault.Kibosh.findProcessObject@POLYN181355 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000007[00187] For method addFault list of called methods Object monObjet|org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess findProcessObjectN182113"
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
 , "c3" : "QC-JAV000007[00195] For method removeFault list of called methods Object monObjet|org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess findProcessObjectN182402"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
