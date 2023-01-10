console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/internals/Topic.java 39 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.internals.Topic"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.internals.Topic" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#40"
 , "c1" : "void"
 , "c2" : "validate(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#46"
 , "c1" : "void"
 , "c2" : "validate(String;String;Consumer<String>)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#59"
 , "c1" : "boolean"
 , "c2" : "isInternal(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#69"
 , "c1" : "boolean"
 , "c2" : "hasCollisionChars(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#80"
 , "c1" : "String"
 , "c2" : "unifyCollisionChars(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#91"
 , "c1" : "boolean"
 , "c2" : "hasCollision(String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#98"
 , "c1" : "boolean"
 , "c2" : "containsValidPattern(String)"
 , "c3" : "3"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "27"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method validate arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.internals.Topic.validate@POLYN158814 the MagicNumber/String  'Topic name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method validate arguments String  name|String  logPrefix|Consumer&lt;String &gt;  throwableConsumer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument name is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument throwableConsumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  ' is illegal, it can't be empty' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  '..' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  ' cannot be \'.\' or \'..\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  ' is illegal, it can't be longer than ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  ' characters, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  ' \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  '\' is illegal, it contains a character other than ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.internals.Topic.validate@POLYN159079 the MagicNumber/String  'ASCII alphanumerics, '.', '_' and '-'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method isInternal arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method hasCollisionChars arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.internals.Topic.hasCollisionChars@POLYN160523 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.internals.Topic.hasCollisionChars@POLYN160523 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method unifyCollisionChars arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.internals.Topic.unifyCollisionChars@POLYN160922 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.internals.Topic.unifyCollisionChars@POLYN160922 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method hasCollision arguments String  topicA|String  topicB"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method containsValidPattern arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument topic is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  'a' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  'z' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  '0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  '9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  'A' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  'Z' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  '_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.internals.Topic.containsValidPattern@POLYN161590 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/Topic.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
