console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/CommandUtils.java 44 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.shell.CommandUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.CommandUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#15"
 , "c1" : "List<String>"
 , "c2" : "getEffectivePaths(List<String>)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#29"
 , "c1" : "void"
 , "c2" : "completeCommand(String;List<Candidate>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#38"
 , "c1" : "List<String>"
 , "c2" : "splitPath(String)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#49"
 , "c1" : "List<String>"
 , "c2" : "stripDotPathComponents(List<String>)"
 , "c3" : "6"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#64"
 , "c1" : "void"
 , "c2" : "completePath(MetadataNodeManager;String;List<Candidate>)"
 , "c3" : "8"
 , "c4" : "24"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "28"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class CommandUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method getEffectivePaths arguments List&lt;String &gt;  paths"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.shell.CommandUtils.getEffectivePaths@POLYN163681 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method completeCommand arguments String  commandPrefix|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument candidates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.shell.CommandUtils.completeCommand@POLYN164435 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method splitPath arguments String  path"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.shell.CommandUtils.splitPath@POLYN165146 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.CommandUtils.splitPath@POLYN165146 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method stripDotPathComponents arguments List&lt;String &gt;  input"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN165869 the MagicNumber/String  '..' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN165869 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN165869 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.shell.CommandUtils.stripDotPathComponents@POLYN165869 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method completePath arguments MetadataNodeManager  nodeManager|String  pathPrefix|List&lt;Candidate &gt;  candidates"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument nodeManager is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument pathPrefix is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument candidates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00098] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.shell.CommandUtils.completePath@POLYN166812 the MagicNumber/String  null should be converted to const"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/shell/src/main/java/org/apache/kafka/shell/CommandUtils.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');
