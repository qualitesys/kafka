const _syntax = new Map();

_syntax.set("Start",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "CompilationUnit"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "JSProgram"},
    ]}, // fin de {}
]);

_syntax.set("Identifier",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "$"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "TX", "valeur" : "STRING_IDENTIFIER"},
    ]}, // fin de []
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$1"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$2"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$3"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$4"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$5"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$6"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$7"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$8"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$9"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "in"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "get"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "set"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "delete"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "function"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "export"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "record"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "requires"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "permits"},
    ] , [  // DV
    {"nature" : "TX", "valeur" : "STRING_IDENTIFIER"},
    ]}, // fin de {}
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "$"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]}, // fin de []
]);

_syntax.set("QualifiedIdentifier",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("Literal",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "IntegerLiteral"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "HexaLiteral"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "FloatingPointLiteral"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "CharacterLiteral"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "StringLiteral"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "BooleanLiteral"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "NullLiteral"},
    ]}, // fin de {}
]);

_syntax.set("IntegerLiteral",
     [
    {"nature" : "NB", "valeur" : "INTEGER_VALUE"},
]);

_syntax.set("HexaLiteral",
     [
    {"nature" : "HX", "valeur" : "HEXA_VALUE"},
]);

_syntax.set("FloatingPointLiteral",
     [
    {"nature" : "NB", "valeur" : "FLOAT_VALUE"},
]);

_syntax.set("CharacterLiteral",
     [
    {"nature" : "TX", "valeur" : "CHARACTER_VALUE"},
]);

_syntax.set("StringLiteral",
     [
    {"nature" : "CH", "valeur" : "STRING_VALUE"},
]);

_syntax.set("BooleanLiteral",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "false"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "true"},
    ]}, // fin de {}
]);

_syntax.set("NullLiteral",
     [
    {"nature" : "MC", "valeur" : "null"},
]);

_syntax.set("JSAnonymousExpressionCall",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "EL", "valeur" : "JSFunctionExpression"},
    {"nature" : "MC", "valeur" : ")"},
    {"nature" : "EL", "valeur" : "Arguments"},
]);

_syntax.set("JSCommaExpression",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de {}
    ]},// fin de ...
    {"nature" : "MC", "valeur" : ")"},
]);

_syntax.set("Expression",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JSAnonymousExpressionCall"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Expression1"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "AssignmentOperator"},
    {"nature" : "EL", "valeur" : "Expression1"},
    ]}, // fin de []
    ]},// fin de ...
    ]}, // fin de {}
]);

_syntax.set("LambdaExpression",
     [
    {"nature" : "EL", "valeur" : "LambdaParameters"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "->"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "=>"},
    ]}, // fin de {}
    {"nature" : "EL", "valeur" : "LambdaBody"},
]);

_syntax.set("LambdaParameters",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "Identifier"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Identifier"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InferredFormalParameterList"},
    ]}, // fin de {}
]);

_syntax.set("InferredFormalParameterList",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Modifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "Identifier"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Modifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]},// fin de ...
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Identifier"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]},// fin de ...
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ")"},
]);

_syntax.set("LambdaBody",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Block"},
    ]}, // fin de {}
]);

_syntax.set("AssignmentOperator",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "+="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "-="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "*="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "/="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "&="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "|="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "^="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "%="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "<<="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ">>="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ">>>="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "in"},
    ]}, // fin de {}
]);

_syntax.set("Type",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Type02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Type01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "TypeVar"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "TypeRecord"},
    ]}, // fin de {}
]);

_syntax.set("Type01",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeArguments"},
    ]}, // fin de []
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeArguments"},
    ]}, // fin de []
    ]}, // fin de []
    ]},// fin de ...
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "QualifiedIdentifier"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("Type02",
     [
    {"nature" : "EL", "valeur" : "BasicType"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("TypeVar",
     [
    {"nature" : "MC", "valeur" : "var"},
]);

_syntax.set("TypeRecord",
     [
    {"nature" : "MC", "valeur" : "record"},
]);

_syntax.set("TypeArguments",
     [
    {"nature" : "MC", "valeur" : "<"},
    {"nature" : "EL", "valeur" : "TypeArgument"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "TypeArgument"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : ">"},
]);

_syntax.set("TypeArgument",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Modifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeArgument02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "TypeArgument01"},
    ]}, // fin de {}
]);

_syntax.set("TypeArgument01",
     [
    {"nature" : "EL", "valeur" : "Type"},
]);

_syntax.set("TypeArgument02",
     [
    {"nature" : "MC", "valeur" : "?"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "extends"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "super"},
    ]}, // fin de {}
    {"nature" : "EL", "valeur" : "Type"},
    ]}, // fin de []
]);

_syntax.set("StatementExpression",
     [
    {"nature" : "EL", "valeur" : "Expression"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("ConstantExpression",
     [
    {"nature" : "EL", "valeur" : "Expression"},
]);

_syntax.set("Expression1",
     [
    {"nature" : "EL", "valeur" : "Expression2"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression1Rest"},
    ]}, // fin de []
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "InfixOp"},
    {"nature" : "EL", "valeur" : "Expression1"},
    ]}, // fin de []
]);

_syntax.set("Expression1Rest",
     [
    {"nature" : "MC", "valeur" : "?"},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "MC", "valeur" : ":"},
    {"nature" : "EL", "valeur" : "Expression1"},
]);

_syntax.set("Expression2",
     [
    {"nature" : "EL", "valeur" : "Expression3"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression2Rest"},
    ]}, // fin de []
]);

_syntax.set("Expression2Rest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression2Rest01"},
    ]}, // fin de {}
]);

_syntax.set("Expression2Rest01",
     [
    {"nature" : "MC", "valeur" : "instanceof"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Pattern"},
    ]}, // fin de {}
]);

_syntax.set("Pattern",
     [
    {"nature" : "EL", "valeur" : "TypePattern"},
]);

_syntax.set("TypePattern",
     [
    {"nature" : "EL", "valeur" : "LocalVariableDeclarationStatementDetail"},
]);

_syntax.set("InfixOp",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "||"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "&&"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "|"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "^"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "&"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "=="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "==="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "!="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "!=="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "<"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ">"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "<="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ">="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "<<"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ">>"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ">>>"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "+"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "-"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "*"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "/"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "%"},
    ]}, // fin de {}
]);

_syntax.set("Expression3",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JSAnonymousExpressionCall"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Expression302"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Expression301"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Expression303"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ExpressionSwitch"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "JSCommaExpression"},
    ]}, // fin de {}
]);

_syntax.set("Expression301",
     [
    {"nature" : "EL", "valeur" : "PrefixOp"},
    {"nature" : "EL", "valeur" : "Expression3"},
]);

_syntax.set("Expression302",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Type"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Expression3"},
    ]}, // fin de {}
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "AdditionalBound"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ")"},
    {"nature" : "EL", "valeur" : "Expression3"},
]);

_syntax.set("Expression303",
     [
    {"nature" : "EL", "valeur" : "Primary"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Selector"},
    ]}, // fin de []
    ]},// fin de ...
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "PostfixOp"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("AdditionalBound",
     [
    {"nature" : "MC", "valeur" : "&"},
    {"nature" : "EL", "valeur" : "Type"},
]);

_syntax.set("ExpressionSwitch",
     [
    {"nature" : "MC", "valeur" : "switch"},
    {"nature" : "EL", "valeur" : "ParExpression"},
    {"nature" : "EL", "valeur" : "SwitchBlock"},
]);

_syntax.set("Primary",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Primary1501"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary03JS"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary04"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "LambdaExpression"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary05"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary06"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary11Js"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary12Js"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary13Js"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary14JsRegex"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary1502"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary07"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary08"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary09"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary10"},
    ]}, // fin de {}
]);

_syntax.set("Primary_a_remettre_predicat_jml_2012_12_16",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Primary01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary04"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary05"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary06"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary07"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary08"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary09"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary10"},
    ]}, // fin de {}
]);

_syntax.set("Primary01",
     [
    {"nature" : "MC", "valeur" : "this"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Arguments"},
    ]}, // fin de []
]);

_syntax.set("Primary02",
     [
    {"nature" : "MC", "valeur" : "super"},
    {"nature" : "EL", "valeur" : "SuperSuffix"},
]);

_syntax.set("Primary03",
     [
    {"nature" : "MC", "valeur" : "new"},
    {"nature" : "EL", "valeur" : "Creator"},
]);

_syntax.set("Primary03JS",
     [
    {"nature" : "MC", "valeur" : "new"},
    {"nature" : "EL", "valeur" : "CreatorJS"},
]);

_syntax.set("Primary04",
     [
    {"nature" : "MC", "valeur" : "void"},
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "class"},
]);

_syntax.set("Primary05",
     [
    {"nature" : "EL", "valeur" : "ParExpression"},
]);

_syntax.set("Primary06",
     [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ExplicitGenericInvocationSuffix"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "this"},
    {"nature" : "EL", "valeur" : "Arguments"},
    ]}, // fin de {}
]);

_syntax.set("Primary07",
     [
    {"nature" : "EL", "valeur" : "BasicType"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "class"},
]);

_syntax.set("Primary08",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "var"},
    ]}, // fin de {}
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeArguments"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "IdentifierSuffix"},
    ]}, // fin de []
]);

_syntax.set("Primary09",
     [
    {"nature" : "EL", "valeur" : "Literal"},
]);

_syntax.set("Primary10",
     [
    {"nature" : "EL", "valeur" : "jml_predicate_keyword"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "IdentifierSuffix"},
    ]}, // fin de []
]);

_syntax.set("Primary11Js",
     [
    {"nature" : "EL", "valeur" : "JSObjectLiteral"},
]);

_syntax.set("Primary12Js",
     [
    {"nature" : "EL", "valeur" : "JSFunctionExpression"},
]);

_syntax.set("Primary13Js",
     [
    {"nature" : "EL", "valeur" : "JSArrayLiteral"},
]);

_syntax.set("Primary14JsRegexElement",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "TX", "valeur" : "STRING_IDENTIFIER"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "IntegerLiteral"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "StringLiteral"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "-"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "|"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "+"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "*"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "?"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "$"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ";"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "="},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "^"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ","},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "."},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ":"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "{"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "}"},
    ] , [  // DV
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("Primary14JsRegexPortion",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Primary14JsRegexElement"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "/"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary14JsRegexPortion"},
    ]}, // fin de {}
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "]"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Primary14JsRegexElement"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "/"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary14JsRegexPortion"},
    ]}, // fin de {}
    ]},// fin de ...
    {"nature" : "MC", "valeur" : ")"},
    ]}, // fin de {}
]);

_syntax.set("Primary14JsRegexMarqueur",
     [
    {"nature" : "TX", "valeur" : "STRING_IDENTIFIER"},
]);

_syntax.set("Primary14JsRegex",
     [
    {"nature" : "MC", "valeur" : "/"},
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Primary14JsRegexPortion"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Primary14JsRegexElement"},
    ]}, // fin de {}
    ]},// fin de ...
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "/"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "*/"},
    ]}, // fin de {}
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Primary14JsRegexMarqueur"},
    ]}, // fin de []
]);

_syntax.set("Primary1501",
     [
    {"nature" : "EL", "valeur" : "MethodReference01"},
]);

_syntax.set("Primary1502",
     [
    {"nature" : "EL", "valeur" : "MethodReference02"},
]);

_syntax.set("IdentifierSuffix",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "IdentifierSuffix01Js"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "IdentifierSuffix01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "IdentifierSuffix03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "IdentifierSuffix02"},
    ]}, // fin de {}
]);

_syntax.set("IdentifierSuffix01Js",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de {}
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Arguments"},
    ]}, // fin de []
]);

_syntax.set("IdentifierSuffix01",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de {}
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "class"},
    ] , [  // DV
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de {}
    ]},// fin de ...
    ]}, // fin de {}
]);

_syntax.set("IdentifierSuffix02",
     [
    {"nature" : "EL", "valeur" : "Arguments"},
]);

_syntax.set("IdentifierSuffix03",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "class"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ExplicitGenericInvocation"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "this"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "super"},
    {"nature" : "EL", "valeur" : "Arguments"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "new"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "InnerCreator"},
    ]}, // fin de {}
]);

_syntax.set("ExplicitGenericInvocation",
     [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    {"nature" : "EL", "valeur" : "ExplicitGenericInvocationSuffix"},
]);

_syntax.set("NonWildcardTypeArguments",
     [
    {"nature" : "MC", "valeur" : "<"},
    {"nature" : "EL", "valeur" : "TypeList"},
    {"nature" : "MC", "valeur" : ">"},
]);

_syntax.set("ExplicitGenericInvocationSuffix",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ExplicitGenericInvocationSuffix01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ExplicitGenericInvocationSuffix02"},
    ]}, // fin de {}
]);

_syntax.set("ExplicitGenericInvocationSuffix01",
     [
    {"nature" : "MC", "valeur" : "super"},
    {"nature" : "EL", "valeur" : "SuperSuffix"},
]);

_syntax.set("ExplicitGenericInvocationSuffix02",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "Arguments"},
]);

_syntax.set("PrefixOp",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "delete"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "void"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "typeof"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "++"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "--"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "!"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "~"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "+"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "-"},
    ]}, // fin de {}
]);

_syntax.set("PostfixOp",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "++"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "--"},
    ]}, // fin de {}
]);

_syntax.set("Selector",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Selector03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Selector04"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Selector05"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Selector06Js"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Selector06"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Selector07"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Selector01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Selector02"},
    ]}, // fin de {}
]);

_syntax.set("Selector01",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Arguments"},
    ]}, // fin de []
]);

_syntax.set("Selector02",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "ExplicitGenericInvocation"},
]);

_syntax.set("Selector03",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "this"},
]);

_syntax.set("Selector04",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "super"},
    {"nature" : "EL", "valeur" : "SuperSuffix"},
]);

_syntax.set("Selector05",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "new"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "InnerCreator"},
]);

_syntax.set("Selector06Js",
     [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "MC", "valeur" : "]"},
    {"nature" : "EL", "valeur" : "Arguments"},
]);

_syntax.set("Selector06",
     [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "MC", "valeur" : "]"},
]);

_syntax.set("Selector07",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "class"},
]);

_syntax.set("SuperSuffix",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "SuperSuffix02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "SuperSuffix01"},
    ]}, // fin de {}
]);

_syntax.set("SuperSuffix01",
     [
    {"nature" : "EL", "valeur" : "Arguments"},
]);

_syntax.set("SuperSuffix02",
     [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Arguments"},
    ]}, // fin de []
]);

_syntax.set("BasicType",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "byte"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "short"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "char"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "int"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "long"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "float"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "double"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "boolean"},
    ]}, // fin de {}
]);

_syntax.set("Arguments",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    ]},// fin de ...
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ")"},
]);

_syntax.set("Creator",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "CreatedName"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ArrayCreatorRest"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ClassCreatorRest"},
    ]}, // fin de {}
]);

_syntax.set("CreatorJS",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "CreatedName"},
    {"nature" : "EL", "valeur" : "ArrayCreatorRest"},
    {"nature" : "EL", "valeur" : "ClassCreatorRest"},
]);

_syntax.set("CreatedName",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "CreatedName02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "CreatedName01"},
    ]}, // fin de {}
]);

_syntax.set("CreatedName01",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    ]}, // fin de []
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "NonWildcardTypeArguments"},
    ]}, // fin de []
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("CreatedName02",
     [
    {"nature" : "EL", "valeur" : "BasicType"},
]);

_syntax.set("InnerCreator",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "ClassCreatorRest"},
]);

_syntax.set("ArrayCreatorRest",
     [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "]"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ArrayInitializer"},
    ]}, // fin de []
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "MC", "valeur" : "]"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
    ]}, // fin de {}
]);

_syntax.set("ClassCreatorRest",
     [
    {"nature" : "EL", "valeur" : "Arguments"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ClassBody"},
    ]}, // fin de []
]);

_syntax.set("ArrayInitializer",
     [
    {"nature" : "MC", "valeur" : "{"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "VariableInitializer"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "VariableInitializer"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    ]}, // fin de []
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("VariableInitializer",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "VariableInitializer01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "VariableInitializer02"},
    ]}, // fin de {}
]);

_syntax.set("VariableInitializer01",
     [
    {"nature" : "EL", "valeur" : "ArrayInitializer"},
]);

_syntax.set("VariableInitializer02",
     [
    {"nature" : "EL", "valeur" : "Expression"},
]);

_syntax.set("ParExpression",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "MC", "valeur" : ")"},
]);

_syntax.set("Block",
     [
    {"nature" : "MC", "valeur" : "{"},
    {"nature" : "EL", "valeur" : "BlockStatements"},
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("BlockStatements",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlockStatement"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("BlockStatement",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlockStatement01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "BlockStatement02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "BlockStatement03"},
    ]}, // fin de {}
]);

_syntax.set("BlockStatement01",
     [
    {"nature" : "EL", "valeur" : "LocalVariableDeclarationStatement"},
]);

_syntax.set("BlockStatement02",
     [
    {"nature" : "EL", "valeur" : "ClassOrInterfaceDeclaration"},
]);

_syntax.set("BlockStatement03",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "MC", "valeur" : ":"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Statement"},
]);

_syntax.set("LocalVariableDeclarationStatement",
     [
    {"nature" : "EL", "valeur" : "LocalVariableDeclarationStatementDetail"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("LocalVariableDeclarationStatementDetail",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Modifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "VariableDeclarators"},
]);

_syntax.set("Statement",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement04"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement05"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement06"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement07"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement08"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement09"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement10"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement10JS"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement11"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement12"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement12JS"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement13"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement13JS"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement14"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement15"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement15JS"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement16"},
    ]}, // fin de {}
]);

_syntax.set("Statement01",
     [
    {"nature" : "EL", "valeur" : "Block"},
]);

_syntax.set("Statement02",
     [
    {"nature" : "MC", "valeur" : "assert"},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ":"},
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement03",
     [
    {"nature" : "MC", "valeur" : "if"},
    {"nature" : "EL", "valeur" : "ParExpression"},
    {"nature" : "EL", "valeur" : "Statement"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Statement03ElseIf"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Statement03Else"},
    ]}, // fin de []
]);

_syntax.set("Statement03ElseIf",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "else"},
    {"nature" : "MC", "valeur" : "if"},
    {"nature" : "EL", "valeur" : "ParExpression"},
    {"nature" : "EL", "valeur" : "Statement"},
]);

_syntax.set("Statement03Else",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "else"},
    {"nature" : "EL", "valeur" : "Statement"},
]);

_syntax.set("Statement04",
     [
    {"nature" : "MC", "valeur" : "for"},
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "EL", "valeur" : "ForControl"},
    {"nature" : "MC", "valeur" : ")"},
    {"nature" : "EL", "valeur" : "Statement"},
]);

_syntax.set("Statement05",
     [
    {"nature" : "MC", "valeur" : "while"},
    {"nature" : "EL", "valeur" : "ParExpression"},
    {"nature" : "EL", "valeur" : "Statement"},
]);

_syntax.set("Statement06",
     [
    {"nature" : "MC", "valeur" : "do"},
    {"nature" : "EL", "valeur" : "Statement"},
    {"nature" : "MC", "valeur" : "while"},
    {"nature" : "EL", "valeur" : "ParExpression"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement07",
     [
    {"nature" : "MC", "valeur" : "try"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ResourceSpecification"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Block"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Statement0702"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement0701"},
    ]}, // fin de []
]);

_syntax.set("ResourceSpecification",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Resources"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "VariableDeclarator"},
    ]}, // fin de {}
    {"nature" : "MC", "valeur" : ")"},
]);

_syntax.set("Resources",
     [
    {"nature" : "EL", "valeur" : "Resource"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ";"},
    {"nature" : "EL", "valeur" : "Resource"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de []
]);

_syntax.set("Resource",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Modifier"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "VariableDeclarator"},
]);

_syntax.set("Statement0701",
     [
    {"nature" : "EL", "valeur" : "Catches"},
]);

_syntax.set("Statement0702",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Catches"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "finally"},
    {"nature" : "EL", "valeur" : "Block"},
]);

_syntax.set("Statement08",
     [
    {"nature" : "MC", "valeur" : "switch"},
    {"nature" : "EL", "valeur" : "ParExpression"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "SwitchBlock"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("Statement09",
     [
    {"nature" : "MC", "valeur" : "synchronized"},
    {"nature" : "EL", "valeur" : "ParExpression"},
    {"nature" : "EL", "valeur" : "Block"},
]);

_syntax.set("Statement10",
     [
    {"nature" : "MC", "valeur" : "return"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement10JS",
     [
    {"nature" : "MC", "valeur" : "return"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
]);

_syntax.set("Statement11",
     [
    {"nature" : "MC", "valeur" : "throw"},
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement12",
     [
    {"nature" : "MC", "valeur" : "break"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement12JS",
     [
    {"nature" : "MC", "valeur" : "break"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
]);

_syntax.set("Statement13",
     [
    {"nature" : "MC", "valeur" : "continue"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement13JS",
     [
    {"nature" : "MC", "valeur" : "continue"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
]);

_syntax.set("Statement14",
     [
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement15_modif_2012_07_21_js",
     [
    {"nature" : "EL", "valeur" : "StatementExpression"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement15",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "var"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "StatementExpression"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("Statement15JS",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "var"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "StatementExpression"},
]);

_syntax.set("Statement16",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "MC", "valeur" : ":"},
    {"nature" : "EL", "valeur" : "Statement"},
]);

_syntax.set("SwitchBlock",
     [
    {"nature" : "EL", "valeur" : "SwitchBlockStatementGroups"},
]);

_syntax.set("Catches",
     [
    {"nature" : "EL", "valeur" : "CatchClause"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "CatchClause"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("CatchClause",
     [
    {"nature" : "MC", "valeur" : "catch"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "EL", "valeur" : "FormalParameterDecls"},
    {"nature" : "MC", "valeur" : ")"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Arguments"},
    ]}, // fin de {}
    {"nature" : "EL", "valeur" : "Block"},
]);

_syntax.set("SwitchBlockStatementGroups",
     [
    {"nature" : "MC", "valeur" : "{"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "SwitchBlockStatementGroup"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("SwitchBlockStatementGroup",
     [
    {"nature" : "EL", "valeur" : "SwitchLabel"},
    {"nature" : "EL", "valeur" : "BlockStatements"},
]);

_syntax.set("SwitchLabel",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "SwitchLabel01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "SwitchLabel02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "SwitchLabel03"},
    ]}, // fin de {}
]);

_syntax.set("SwitchLabel01",
     [
    {"nature" : "MC", "valeur" : "case"},
    {"nature" : "EL", "valeur" : "ConstantExpression"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "ConstantExpression"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ":"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "->"},
    ]}, // fin de {}
]);

_syntax.set("SwitchLabel02",
     [
    {"nature" : "MC", "valeur" : "case"},
    {"nature" : "EL", "valeur" : "EnumConstantName"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "EnumConstantName"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ":"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "->"},
    ]}, // fin de {}
]);

_syntax.set("SwitchLabel03",
     [
    {"nature" : "MC", "valeur" : "default"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ":"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "->"},
    ]}, // fin de {}
]);

_syntax.set("MoreStatementExpressions",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "StatementExpression"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("ForControl",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ForControl02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ForControl01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ForControl03JS"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ForControl04JS"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ForControl05JS"},
    ]}, // fin de {}
]);

_syntax.set("ForControl01",
     [
    {"nature" : "EL", "valeur" : "ForVarControl"},
]);

_syntax.set("ForControl02",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ForInit"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ForUpdate"},
    ]}, // fin de []
]);

_syntax.set("ForControl03JS",
     [
    {"nature" : "MC", "valeur" : "var"},
    {"nature" : "EL", "valeur" : "ForControl03JS_detail_detail"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ForControl03JS_detail"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("ForControl03JS_detail",
     [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "ForControl03JS_detail_detail"},
]);

_syntax.set("ForControl03JS_detail_detail",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "ForVarControlRest"},
]);

_syntax.set("ForControl04JS",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "MC", "valeur" : "in"},
    {"nature" : "EL", "valeur" : "Expression"},
]);

_syntax.set("ForControl05JS",
     [
    {"nature" : "MC", "valeur" : "var"},
    {"nature" : "EL", "valeur" : "Expression"},
]);

_syntax.set("ForVarControl",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "final"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Annotations"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "ForVarControlRest"},
]);

_syntax.set("Annotations",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Annotation"},
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("Annotation",
     [
    {"nature" : "MC", "valeur" : "@"},
    {"nature" : "EL", "valeur" : "TypeName"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "TypeName"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "("},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "QualifiedIdentifier"},
    {"nature" : "MC", "valeur" : "="},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "ElementValue"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    ]}, // fin de []
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : ")"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "MC", "valeur" : "{"},
    {"nature" : "EL", "valeur" : "Annotation"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Annotation"},
    ]}, // fin de []
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "}"},
    {"nature" : "MC", "valeur" : ")"},
    ]}, // fin de []
]);

_syntax.set("TypeName",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
]);

_syntax.set("ElementValue",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ElementValue01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ElementValue02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ElementValue03"},
    ]}, // fin de {}
]);

_syntax.set("ElementValue01",
     [
    {"nature" : "EL", "valeur" : "ConditionalExpression"},
]);

_syntax.set("ElementValue02",
     [
    {"nature" : "EL", "valeur" : "Annotation"},
]);

_syntax.set("ElementValue03",
     [
    {"nature" : "EL", "valeur" : "ElementValueArrayInitializer"},
]);

_syntax.set("ConditionalExpression",
     [
    {"nature" : "EL", "valeur" : "Expression1"},
]);

_syntax.set("ElementValueArrayInitializer",
     [
    {"nature" : "MC", "valeur" : "{"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ElementValue"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ElementValue"},
    ]}, // fin de []
    ]}, // fin de []
    ]},// fin de ...
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("ForVarControlRest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ForVarControlRest02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ForVarControlRest01"},
    ]}, // fin de {}
]);

_syntax.set("ForVarControlRest01",
     [
    {"nature" : "EL", "valeur" : "VariableDeclaratorsRest"},
    {"nature" : "MC", "valeur" : ";"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ForUpdate"},
    ]}, // fin de []
]);

_syntax.set("ForVarControlRest02",
     [
    {"nature" : "MC", "valeur" : ":"},
    {"nature" : "EL", "valeur" : "Expression"},
]);

_syntax.set("ForInit",
     [
    {"nature" : "EL", "valeur" : "StatementExpression"},
    {"nature" : "EL", "valeur" : "MoreStatementExpressions"},
]);

_syntax.set("ForUpdate",
     [
    {"nature" : "EL", "valeur" : "StatementExpression"},
    {"nature" : "EL", "valeur" : "MoreStatementExpressions"},
]);

_syntax.set("Modifier",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Annotation"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "public"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "protected"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "private"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "static"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "abstract"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "final"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "native"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "synchronized"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "transient"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "volatile"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "strictfp"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "sealed"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "non-sealed"},
    ]}, // fin de {}
]);

_syntax.set("VariableDeclarators",
     [
    {"nature" : "EL", "valeur" : "VariableDeclarator"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "VariableDeclarator"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("VariableDeclaratorsRest",
     [
    {"nature" : "EL", "valeur" : "VariableDeclaratorRest"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "VariableDeclarator"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("ConstantDeclaratorsRest",
     [
    {"nature" : "EL", "valeur" : "ConstantDeclaratorRest"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "ConstantDeclarator"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("VariableDeclarator",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "VariableDeclaratorRest"},
]);

_syntax.set("ConstantDeclarator",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "ConstantDeclaratorRest"},
]);

_syntax.set("VariableDeclaratorRest",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "="},
    {"nature" : "EL", "valeur" : "VariableInitializer"},
    ]}, // fin de []
]);

_syntax.set("ConstantDeclaratorRest",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "="},
    {"nature" : "EL", "valeur" : "VariableInitializer"},
]);

_syntax.set("VariableDeclaratorId",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "var"},
    ]}, // fin de {}
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("CompilationUnit",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Annotations"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "package"},
    {"nature" : "EL", "valeur" : "QualifiedIdentifier"},
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de []
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ImportDeclaration"},
    ]}, // fin de []
    ]},// fin de ...
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeDeclaration"},
    ]}, // fin de []
    ]},// fin de ...
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("ImportDeclaration",
     [
    {"nature" : "MC", "valeur" : "import"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "static"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Identifier"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "*"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("TypeDeclaration",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeDeclaration01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "TypeDeclaration02"},
    ]}, // fin de {}
]);

_syntax.set("TypeDeclaration01",
     [
    {"nature" : "EL", "valeur" : "ClassOrInterfaceDeclaration"},
]);

_syntax.set("TypeDeclaration02",
     [
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("ClassOrInterfaceDeclaration",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Modifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ClassDeclaration"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceDeclaration"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "RecordDeclaration"},
    ]}, // fin de {}
]);

_syntax.set("RecordDeclaration",
     [
    {"nature" : "MC", "valeur" : "record"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeParameters"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "FormalParameters"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "extends"},
    {"nature" : "EL", "valeur" : "Bound"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "implements"},
    {"nature" : "EL", "valeur" : "TypeList"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "ClassBody"},
]);

_syntax.set("ClassDeclaration",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ClassDeclaration01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ClassDeclaration02"},
    ]}, // fin de {}
]);

_syntax.set("ClassDeclaration01",
     [
    {"nature" : "EL", "valeur" : "NormalClassDeclaration"},
]);

_syntax.set("ClassDeclaration02",
     [
    {"nature" : "EL", "valeur" : "EnumDeclaration"},
]);

_syntax.set("NormalClassDeclaration",
     [
    {"nature" : "MC", "valeur" : "class"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeParameters"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "extends"},
    {"nature" : "EL", "valeur" : "Bound"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "implements"},
    {"nature" : "EL", "valeur" : "TypeList"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "permits"},
    {"nature" : "EL", "valeur" : "TypeList"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "ClassBody"},
]);

_syntax.set("TypeParameters",
     [
    {"nature" : "MC", "valeur" : "<"},
    {"nature" : "EL", "valeur" : "TypeParameter"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "TypeParameter"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : ">"},
]);

_syntax.set("TypeParameter",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "extends"},
    {"nature" : "EL", "valeur" : "Bound"},
    ]}, // fin de []
]);

_syntax.set("Bound",
     [
    {"nature" : "EL", "valeur" : "Type"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "&"},
    {"nature" : "EL", "valeur" : "Type"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("EnumDeclaration",
     [
    {"nature" : "MC", "valeur" : "enum"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "implements"},
    {"nature" : "EL", "valeur" : "TypeList"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "EnumBody"},
]);

_syntax.set("EnumBody",
     [
    {"nature" : "MC", "valeur" : "{"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "EnumConstants"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "EnumBodyDeclarations"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("EnumConstants",
     [
    {"nature" : "EL", "valeur" : "EnumConstant"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "EnumConstant"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("EnumConstant",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Annotations"},
    ]}, // fin de []
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Arguments"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ClassBody"},
    ]}, // fin de []
]);

_syntax.set("EnumBodyDeclarations",
     [
    {"nature" : "MC", "valeur" : ";"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ClassBodyDeclaration"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("InterfaceDeclaration",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "InterfaceDeclaration01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceDeclaration02"},
    ]}, // fin de {}
]);

_syntax.set("InterfaceDeclaration01",
     [
    {"nature" : "EL", "valeur" : "NormalInterfaceDeclaration"},
]);

_syntax.set("InterfaceDeclaration02",
     [
    {"nature" : "EL", "valeur" : "AnnotationTypeDeclaration"},
]);

_syntax.set("NormalInterfaceDeclaration",
     [
    {"nature" : "MC", "valeur" : "interface"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeParameters"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "extends"},
    {"nature" : "EL", "valeur" : "TypeList"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "permits"},
    {"nature" : "EL", "valeur" : "TypeList"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "InterfaceBody"},
]);

_syntax.set("TypeList",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "?"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Type"},
    ]}, // fin de []
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "?"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Type"},
    ]}, // fin de []
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("AnnotationTypeDeclaration",
     [
    {"nature" : "MC", "valeur" : "@"},
    {"nature" : "MC", "valeur" : "interface"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "AnnotationTypeBody"},
]);

_syntax.set("AnnotationTypeBody",
     [
    {"nature" : "MC", "valeur" : "{"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "AnnotationTypeElementDeclaration"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("AnnotationTypeElementDeclaration",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Modifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "AnnotationTypeElementRest"},
]);

_syntax.set("AnnotationTypeElementRest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "AnnotationTypeElementRest01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "AnnotationTypeElementRest02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "AnnotationTypeElementRest03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "AnnotationTypeElementRest04"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "AnnotationTypeElementRest05"},
    ]}, // fin de {}
]);

_syntax.set("AnnotationTypeElementRest01",
     [
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "AnnotationMethodOrConstantRest"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("AnnotationTypeElementRest02",
     [
    {"nature" : "EL", "valeur" : "ClassDeclaration"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de []
]);

_syntax.set("AnnotationTypeElementRest03",
     [
    {"nature" : "EL", "valeur" : "InterfaceDeclaration"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de []
]);

_syntax.set("AnnotationTypeElementRest04",
     [
    {"nature" : "EL", "valeur" : "EnumDeclaration"},
]);

_syntax.set("AnnotationTypeElementRest05",
     [
    {"nature" : "EL", "valeur" : "AnnotationTypeDeclaration"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de []
]);

_syntax.set("AnnotationMethodOrConstantRest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "AnnotationMethodRest"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "AnnotationConstantRest"},
    ]}, // fin de {}
]);

_syntax.set("AnnotationMethodRest",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "MC", "valeur" : ")"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "DefaultValue"},
    ]}, // fin de []
]);

_syntax.set("AnnotationConstantRest",
     [
    {"nature" : "EL", "valeur" : "ConstantDeclaratorRest"},
]);

_syntax.set("DefaultValue",
     [
    {"nature" : "MC", "valeur" : "default"},
    {"nature" : "EL", "valeur" : "ElementValue"},
]);

_syntax.set("ClassBody",
     [
    {"nature" : "MC", "valeur" : "{"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ClassBodyDeclaration"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("InterfaceBody",
     [
    {"nature" : "MC", "valeur" : "{"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "InterfaceBodyDeclaration"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("ClassBodyDeclaration",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "JmlClauseInvariant"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ClassBodyDeclaration01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ClassBodyDeclaration02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ClassBodyDeclaration03"},
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("ClassBodyDeclaration01",
     [
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("ClassBodyDeclaration02",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "static"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Block"},
]);

_syntax.set("ClassBodyDeclaration03",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JmlClause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Modifier"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "MemberDecl"},
]);

_syntax.set("MemberDecl",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "MemberDecl03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "MemberDecl07"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "MemberDecl01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "MemberDecl02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "MemberDecl04"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "MemberDecl05"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "MemberDecl06"},
    ]}, // fin de {}
]);

_syntax.set("MemberDecl01",
     [
    {"nature" : "EL", "valeur" : "GenericMethodOrConstructorDecl"},
]);

_syntax.set("MemberDecl02",
     [
    {"nature" : "EL", "valeur" : "MethodOrFieldDecl"},
]);

_syntax.set("MemberDecl03",
     [
    {"nature" : "MC", "valeur" : "void"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "VoidMethodDeclaratorRest"},
]);

_syntax.set("MemberDecl04",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "ConstructorDeclaratorRest"},
]);

_syntax.set("MemberDecl05",
     [
    {"nature" : "EL", "valeur" : "InterfaceDeclaration"},
]);

_syntax.set("MemberDecl06",
     [
    {"nature" : "EL", "valeur" : "ClassDeclaration"},
]);

_syntax.set("MemberDecl07",
     [
    {"nature" : "EL", "valeur" : "RecordDeclaration"},
]);

_syntax.set("GenericMethodOrConstructorDecl",
     [
    {"nature" : "EL", "valeur" : "TypeParameters"},
    {"nature" : "EL", "valeur" : "GenericMethodOrConstructorRest"},
]);

_syntax.set("GenericMethodOrConstructorRest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "GenericMethodOrConstructorRest01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "GenericMethodOrConstructorRest02"},
    ]}, // fin de {}
]);

_syntax.set("GenericMethodOrConstructorRest01",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Type"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "void"},
    ]}, // fin de {}
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "MethodDeclaratorRest"},
]);

_syntax.set("GenericMethodOrConstructorRest02",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "ConstructorDeclaratorRest"},
]);

_syntax.set("MethodOrFieldDecl",
     [
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "MethodOrFieldRest"},
]);

_syntax.set("MethodOrFieldRest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "MethodOrFieldRest01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "MethodOrFieldRest02"},
    ]}, // fin de {}
]);

_syntax.set("MethodOrFieldRest01",
     [
    {"nature" : "EL", "valeur" : "MethodDeclaratorRest"},
]);

_syntax.set("MethodOrFieldRest02",
     [
    {"nature" : "EL", "valeur" : "VariableDeclaratorsRest"},
]);

_syntax.set("InterfaceBodyDeclaration",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "BlocComment"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceBodyDeclaration01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceBodyDeclaration02"},
    ]}, // fin de {}
]);

_syntax.set("InterfaceBodyDeclaration01",
     [
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("InterfaceBodyDeclaration02",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "default"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Modifier"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "BlocComment"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "InterfaceMemberDecl"},
]);

_syntax.set("InterfaceMemberDecl",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "InterfaceMemberDecl06"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceMemberDecl01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceMemberDecl02"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceMemberDecl03"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceMemberDecl04"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceMemberDecl05"},
    ]}, // fin de {}
]);

_syntax.set("InterfaceMemberDecl01",
     [
    {"nature" : "EL", "valeur" : "InterfaceMethodOrFieldDecl"},
]);

_syntax.set("InterfaceMemberDecl02",
     [
    {"nature" : "EL", "valeur" : "InterfaceGenericMethodDecl"},
]);

_syntax.set("InterfaceMemberDecl03",
     [
    {"nature" : "MC", "valeur" : "void"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "VoidInterfaceMethodDeclaratorRest"},
]);

_syntax.set("InterfaceMemberDecl04",
     [
    {"nature" : "EL", "valeur" : "InterfaceDeclaration"},
]);

_syntax.set("InterfaceMemberDecl05",
     [
    {"nature" : "EL", "valeur" : "ClassDeclaration"},
]);

_syntax.set("InterfaceMemberDecl06",
     [
    {"nature" : "EL", "valeur" : "RecordDeclaration"},
]);

_syntax.set("InterfaceMethodOrFieldDecl",
     [
    {"nature" : "EL", "valeur" : "Type"},
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "InterfaceMethodOrFieldRest"},
]);

_syntax.set("InterfaceMethodOrFieldRest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "InterfaceMethodOrFieldRest01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "InterfaceMethodOrFieldRest02"},
    ]}, // fin de {}
]);

_syntax.set("InterfaceMethodOrFieldRest01",
     [
    {"nature" : "EL", "valeur" : "ConstantDeclaratorsRest"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("InterfaceMethodOrFieldRest02",
     [
    {"nature" : "EL", "valeur" : "InterfaceMethodDeclaratorRest"},
]);

_syntax.set("MethodDeclaratorRest",
     [
    {"nature" : "EL", "valeur" : "FormalParameters"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "throws"},
    {"nature" : "EL", "valeur" : "QualifiedIdentifierList"},
    ]}, // fin de []
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "MethodBody"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de {}
]);

_syntax.set("VoidMethodDeclaratorRest",
     [
    {"nature" : "EL", "valeur" : "FormalParameters"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "throws"},
    {"nature" : "EL", "valeur" : "QualifiedIdentifierList"},
    ]}, // fin de []
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "MethodBody"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de {}
]);

_syntax.set("InterfaceMethodDeclaratorRest",
     [
    {"nature" : "EL", "valeur" : "FormalParameters"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "throws"},
    {"nature" : "EL", "valeur" : "QualifiedIdentifierList"},
    ]}, // fin de []
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "MethodBody"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de {}
]);

_syntax.set("InterfaceGenericMethodDecl",
     [
    {"nature" : "EL", "valeur" : "TypeParameters"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Type"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "void"},
    ]}, // fin de {}
    {"nature" : "EL", "valeur" : "Identifier"},
    {"nature" : "EL", "valeur" : "InterfaceMethodDeclaratorRest"},
]);

_syntax.set("VoidInterfaceMethodDeclaratorRest",
     [
    {"nature" : "EL", "valeur" : "FormalParameters"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "throws"},
    {"nature" : "EL", "valeur" : "QualifiedIdentifierList"},
    ]}, // fin de []
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "MethodBody"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ";"},
    ]}, // fin de {}
]);

_syntax.set("ConstructorDeclaratorRest",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "FormalParameters"},
    ]}, // fin de []
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "throws"},
    {"nature" : "EL", "valeur" : "QualifiedIdentifierList"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "MethodBody"},
]);

_syntax.set("QualifiedIdentifierList",
     [
    {"nature" : "EL", "valeur" : "QualifiedIdentifier"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "QualifiedIdentifier"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("FormalParameters",
     [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "FormalParameterDecls"},
    ]}, // fin de []
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "FormalParameterDecls"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : ")"},
]);

_syntax.set("FormalParameterDecls",
     [
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "final"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Annotations"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "Type"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "|"},
    {"nature" : "EL", "valeur" : "Type"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "EL", "valeur" : "FormalParameterDeclsRest"},
]);

_syntax.set("FormalParameterDeclsRest",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "FormalParameterDeclsRest01"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "FormalParameterDeclsRest02"},
    ]}, // fin de {}
]);

_syntax.set("FormalParameterDeclsRest01",
     [
    {"nature" : "EL", "valeur" : "VariableDeclaratorId"},
]);

_syntax.set("FormalParameterDeclsRest02",
     [
    {"nature" : "MC", "valeur" : "..."},
    {"nature" : "EL", "valeur" : "VariableDeclaratorId"},
]);

_syntax.set("MethodBody",
     [
    {"nature" : "EL", "valeur" : "Block"},
]);

_syntax.set("EnumConstantName",
     [
    {"nature" : "EL", "valeur" : "Identifier"},
]);

_syntax.set("JmlClause",
     [
    {"nature" : "MC", "valeur" : "/"},
    {"nature" : "MC", "valeur" : "*"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "@"},
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_lightweight_spec_case"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_modifier"},
    ]}, // fin de {}
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "@"},
    {"nature" : "MC", "valeur" : "*"},
    {"nature" : "MC", "valeur" : "/"},
]);

_syntax.set("JmlClauseInvariant",
     [
    {"nature" : "MC", "valeur" : "/"},
    {"nature" : "MC", "valeur" : "*"},
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "@"},
    {"nature" : "EL", "valeur" : "jml_declaration"},
    ]}, // fin de {}
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "@"},
    {"nature" : "MC", "valeur" : "*"},
    {"nature" : "MC", "valeur" : "/"},
]);

_syntax.set("jml_lightweight_spec_case",
     [
    {"nature" : "EL", "valeur" : "jml_generic_spec_case"},
]);

_syntax.set("jml_generic_spec_case",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_spec_var_decls"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "jml_spec_header"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_generic_spec_body"},
    ]}, // fin de []
    ] , [  // DV
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_spec_var_decls"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "jml_generic_spec_body"},
    ]}, // fin de {}
]);

_syntax.set("jml_generic_spec_body",
     [
    {"nature" : "EL", "valeur" : "jml_simple_spec_body"},
]);

_syntax.set("jml_generic_spec_case_seq",
     [
    {"nature" : "EL", "valeur" : "jml_generic_spec_case"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "a_changer_also"},
    {"nature" : "EL", "valeur" : "jml_generic_spec_case"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("jml_spec_header",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_requires_clause"},
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("jml_simple_spec_body",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_simple_spec_body_clause"},
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("jml_simple_spec_body_clause",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_diverges_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_assignable_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_accessible_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_captures_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_callable_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_when_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_working_space_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_duration_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_ensures_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_signals_only_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_signals_clause"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "jml_measured_clause"},
    ]}, // fin de {}
]);

_syntax.set("jml_spec_var_decls",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_generic_spec_case",
     [
]);

_syntax.set("jml_requires_clause",
     [
    {"nature" : "EL", "valeur" : "jml_requires_keyword"},
    {"nature" : "EL", "valeur" : "jml_pred_or_not"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("jml_requires_keyword",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "requires"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_pre"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_requires_redundantly"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_pre_reduntantly"},
    ]}, // fin de {}
]);

_syntax.set("jml_pred_or_not",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_predicate"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\not_specified"},
    ]}, // fin de {}
]);

_syntax.set("jml_predicate",
     [
    {"nature" : "EL", "valeur" : "ConditionalExpression"},
]);

_syntax.set("jml_diverges_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_assignable_clause",
     [
    {"nature" : "EL", "valeur" : "jml_assignable_keyword"},
    {"nature" : "EL", "valeur" : "jml_store_ref_list"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("jml_assignable_keyword",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "assignable"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_assignable_redundantly"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_modifiable"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_modifiable_redundantly"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_modifies"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_modifies_redundantly"},
    ]}, // fin de {}
]);

_syntax.set("jml_store_ref_list",
     [
    {"nature" : "EL", "valeur" : "Expression"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    {"nature" : "EL", "valeur" : "Expression"},
    ]}, // fin de []
    ]},// fin de ...
]);

_syntax.set("jml_accessible_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_captures_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_callable_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_when_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_working_space_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_duration_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_ensures_clause",
     [
    {"nature" : "EL", "valeur" : "jml_ensures_keyword"},
    {"nature" : "EL", "valeur" : "jml_pred_or_not"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("jml_ensures_keyword",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "ensures"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_post"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_ensures_redundantly"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_post_redundantly"},
    ]}, // fin de {}
]);

_syntax.set("jml_signals_only_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_signals_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_measured_clause",
     [
    {"nature" : "MC", "valeur" : "ZZZZ"},
]);

_syntax.set("jml_modifier",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "spec_public"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_spec_protected"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_model"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_ghost"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "pure"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_instance"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_helper"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_uninitialized"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_spec_java_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_spec_safe_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_spec_bigint_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_code_java_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_code_safe_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_code_bigint_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_non_null"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_nullable"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_nullable_by_default"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_extract"},
    ]}, // fin de {}
]);

_syntax.set("jml_modifiers",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_modifier"},
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("jml_predicate_keyword",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "\TYPE"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\bigint"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\bigint_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\duration"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\elemtype"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\everything"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\exists"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\forall"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\fresh"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\into"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\invariant_for"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\is_initialized"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\java_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\lblneg"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\lblpos"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\lockset"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\max"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\min"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\nonnullelements"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\not_assigned"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\not_modified"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\not_specified"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\nothing"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\nowarn"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\nowarn_op"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\num_of"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\old"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\only_accessed"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\only_assigned"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\only_called"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\only_captured"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\pre"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\product"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\reach"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\real"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\result"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\same"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\safe_math"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\space"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\such_that"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\sum"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\typeof"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\type"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\warn_op"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\warn"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\working_space"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\peer"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\readonly"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "\rep"},
    ]}, // fin de {}
]);

_syntax.set("jml_declaration",
     [
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "jml_modifiers"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "jml_invariant"},
]);

_syntax.set("jml_invariant",
     [
    {"nature" : "EL", "valeur" : "jml_invariant_keyword"},
    {"nature" : "EL", "valeur" : "jml_predicate"},
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("jml_invariant_keyword",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "invariant"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "a_changer_invariant_redundantly"},
    ]}, // fin de {}
]);

_syntax.set("BlocComment",
     [
    {"nature" : "MC", "valeur" : "/*"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ")"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "<"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : ">"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "/"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "@"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "`"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "--"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "/*"},
    ] , [  // DV
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "*/"},
]);

_syntax.set("JSProgram",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JSSourceElement"},
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("ExportDeclaration",
     [
    {"nature" : "MC", "valeur" : "export"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "default"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Identifier"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "MC", "valeur" : "*"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : ";"},
]);

_syntax.set("JSSourceElement",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ImportDeclaration"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ExportDeclaration"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "JSFunctionDeclaration"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Statement"},
    ]}, // fin de {}
]);

_syntax.set("JSFunctionDeclaration",
     [
    {"nature" : "MC", "valeur" : "function"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Arguments"},
    {"nature" : "EL", "valeur" : "MethodBody"},
]);

_syntax.set("JSFunctionExpression",
     [
    {"nature" : "MC", "valeur" : "function"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Arguments"},
    {"nature" : "EL", "valeur" : "MethodBody"},
]);

_syntax.set("JSObjectLiteral",
     [
    {"nature" : "MC", "valeur" : "{"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JSPropertyNameAndValueList"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "}"},
]);

_syntax.set("JSPropertyNameAndValueList",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JSPropertyAssignment"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    ]}, // fin de []
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("JSPropertyAssignment",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JSPropertyName"},
    {"nature" : "MC", "valeur" : ":"},
    {"nature" : "EL", "valeur" : "Expression"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "get"},
    {"nature" : "EL", "valeur" : "JSPropertyName"},
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "MC", "valeur" : ")"},
    {"nature" : "EL", "valeur" : "MethodBody"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "set"},
    {"nature" : "EL", "valeur" : "JSPropertyName"},
    {"nature" : "EL", "valeur" : "JSPropertySetParameterList"},
    {"nature" : "EL", "valeur" : "MethodBody"},
    ]}, // fin de {}
]);

_syntax.set("JSPropertySetParameterList",
     [
    {"nature" : "EL", "valeur" : "Arguments"},
]);

_syntax.set("JSPropertyName",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Identifier"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Literal"},
    ]}, // fin de {}
]);

_syntax.set("JSArrayLiteral",
     [
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "JSElementList"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "]"},
]);

_syntax.set("JSElementList",
     [
    {"nature" : "PM", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Expression"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : ","},
    ]}, // fin de []
    ]}, // fin de {}
    ]},// fin de ...
]);

_syntax.set("MethodReference01",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "super"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "this"},
    ]}, // fin de {}
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]},// fin de ...
    {"nature" : "MC", "valeur" : "::"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeArguments"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Identifier"},
]);

_syntax.set("MethodReference02",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "ExpressionName"},
    {"nature" : "MC", "valeur" : "super"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ExpressionName"},
    ]}, // fin de {}
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "MC", "valeur" : ")"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "::"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeArguments"},
    ]}, // fin de []
    {"nature" : "EL", "valeur" : "Identifier"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "ExpressionName"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "("},
    {"nature" : "MC", "valeur" : ")"},
    ] , [  // DV
    {"nature" : "MC", "valeur" : "["},
    {"nature" : "MC", "valeur" : "]"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "::"},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "TypeArguments"},
    ]}, // fin de []
    {"nature" : "MC", "valeur" : "new"},
    ]}, // fin de {}
]);

_syntax.set("ExpressionName",
     [
    {"nature" : "PA", "valeur" : [
    {"casvi" : [
    {"nature" : "EL", "valeur" : "Primary08"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Identifier"},
   {"nature" : "CM", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "."},
    {"nature" : "CR", "valeur" : [
    {"casvi" : [
    {"nature" : "MC", "valeur" : "this"},
    ] , [  // DV
    {"nature" : "EL", "valeur" : "Identifier"},
    ]}, // fin de []
    ]}, // fin de []
    ]},// fin de ...
    ]}, // fin de {}
]);

