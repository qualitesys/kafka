console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/StructRegistry.java 41 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.message.StructRegistry"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.StructRegistry" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#61"
 , "c1" : "StructRegistry"
 , "c2" : "StructRegistry()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#69"
 , "c1" : "void"
 , "c2" : "register(MessageSpec)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#87"
 , "c1" : "void"
 , "c2" : "addStructSpecs(Versions;List&lt;FieldSpec&gt;)"
 , "c3" : "11"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#126"
 , "c1" : "StructSpec"
 , "c2" : "findStruct(FieldSpec)"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#150"
 , "c1" : "boolean"
 , "c2" : "isStructArrayWithKeys(FieldSpec)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00166"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#166"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "commonStructNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00173"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#173"
 , "c1" : "Iterator&lt;StructSpec&gt;"
 , "c2" : "commonStructs()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00189"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#189"
 , "c1" : "Iterator&lt;StructInfo&gt;"
 , "c2" : "structs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.svg" }

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
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
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
 , "c4" : "6"
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
 , "c4" : "4"
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
 , "c1" : "00069"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method register arguments MessageSpec  message"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument message is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.message.StructRegistry.register@POLYN175883 the MagicNumber/String  'Can't process structure ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.message.StructRegistry.register@POLYN175883 the MagicNumber/String  ': the first letter of structure names must be capitalized.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.message.StructRegistry.register@POLYN175883 the MagicNumber/String  'Common struct ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.message.StructRegistry.register@POLYN175883 the MagicNumber/String  ' was specified twice.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method addStructSpecs arguments Versions  parentVersions|List&lt;FieldSpec &gt;  fields"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument parentVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00089] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String  'Can't re-specify the common struct ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String  ' as an inline struct.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String  'Struct ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String  ' was specified twice.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method findStruct arguments FieldSpec  field"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00126] For method findStruct list of called methods Object monObjet|V structs_getN179878"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.message.StructRegistry.findStruct@POLYN179037 the MagicNumber/String  'Field ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.message.StructRegistry.findStruct@POLYN179037 the MagicNumber/String  ' cannot be treated as a structure.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.message.StructRegistry.findStruct@POLYN179037 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.message.StructRegistry.findStruct@POLYN179037 the MagicNumber/String  'Unable to locate a specification for the structure ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method isStructArrayWithKeys arguments FieldSpec  field"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00150] For method isStructArrayWithKeys list of called methods Object monObjet|V structs_getN180721"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#150"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00150] The argument field is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.message.StructRegistry.isStructArrayWithKeys@POLYN180258 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.message.StructRegistry.isStructArrayWithKeys@POLYN180258 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.message.StructRegistry.isStructArrayWithKeys@POLYN180258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.message.StructRegistry.isStructArrayWithKeys@POLYN180258 the MagicNumber/String  'Unable to locate a specification for the structure ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String 'Can't re-specify the common struct ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String ' as an inline struct.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String 'Struct ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method org.apache.kafka.message.StructRegistry.addStructSpecs@POLYN177018 the MagicNumber/String ' was specified twice.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/generator/src/main/java/org/apache/kafka/message/StructRegistry.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
